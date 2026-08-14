/**
 * AVRX Lead Memory & Backup Store
 * Safe in-memory store with filesystem fallback when writable
 */

import fs from 'fs';
import path from 'path';
import { LeadData } from './emailTemplates';

export interface LeadRecord extends LeadData {
  status: 'New' | 'Contacted' | 'Follow Up' | 'Converted' | 'Closed';
  emailStatus: 'sent' | 'failed' | 'simulated';
  emailError?: string;
  ipAddress?: string;
  updatedAt?: string;
}

// In-memory cache of leads
let inMemoryLeads: LeadRecord[] = [];

// Determine safe storage path (handles Vercel read-only Lambda environment)
const getStoragePath = (): string | null => {
  try {
    const tmpPath = path.join('/tmp', 'avrx_leads_backup.json');
    return tmpPath;
  } catch (err) {
    return null;
  }
};

/**
 * Save lead record safely
 */
export function saveLead(lead: LeadRecord): void {
  try {
    inMemoryLeads.unshift(lead);
    if (inMemoryLeads.length > 500) {
      inMemoryLeads = inMemoryLeads.slice(0, 500);
    }
    const filePath = getStoragePath();
    if (filePath) {
      fs.writeFileSync(filePath, JSON.stringify(inMemoryLeads, null, 2), 'utf-8');
    }
    console.log(`[AVRX LEAD STORE] Lead ${lead.id} processed.`);
  } catch (err: any) {
    // Non-blocking in serverless environments
    console.log(`[AVRX LEAD STORE] Lead in memory: ${lead.id}`);
  }
}

/**
 * Get all leads
 */
export function getAllLeads(): LeadRecord[] {
  return inMemoryLeads;
}

/**
 * Get single lead by ID
 */
export function getLeadById(id: string): LeadRecord | undefined {
  return inMemoryLeads.find(l => l.id === id);
}
