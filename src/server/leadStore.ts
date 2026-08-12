/**
 * AVRX Lead Database / Backup Store
 * Saves all submitted inquiries securely to local backup storage.
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

// Memory cache of leads
let inMemoryLeads: LeadRecord[] = [];

// Determine safe storage path
const getStoragePath = (): string => {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    return path.join(dataDir, 'leads_backup.json');
  } catch (err) {
    // Fallback to tmp directory if process.cwd is read-only
    return path.join('/tmp', 'avrx_leads_backup.json');
  }
};

// Load initial leads from backup file
try {
  const filePath = getStoragePath();
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    inMemoryLeads = JSON.parse(raw);
  }
} catch (err) {
  console.log('[AVRX LEAD STORE] Initialized empty lead memory database');
}

/**
 * Save lead record
 */
export function saveLead(lead: LeadRecord): void {
  try {
    inMemoryLeads.unshift(lead); // Add to beginning
    // Keep max 1000 latest leads in file
    if (inMemoryLeads.length > 1000) {
      inMemoryLeads = inMemoryLeads.slice(0, 1000);
    }
    const filePath = getStoragePath();
    fs.writeFileSync(filePath, JSON.stringify(inMemoryLeads, null, 2), 'utf-8');
    console.log(`[AVRX LEAD STORE] Lead ${lead.id} successfully saved to local database backup.`);
  } catch (err: any) {
    console.error(`[AVRX LEAD STORE ERROR] Failed writing lead ${lead.id} to file:`, err?.message || err);
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

/**
 * Update lead status (for future admin portal management)
 */
export function updateLeadStatus(id: string, status: LeadRecord['status']): boolean {
  const lead = inMemoryLeads.find(l => l.id === id);
  if (lead) {
    lead.status = status;
    lead.updatedAt = new Date().toISOString();
    try {
      const filePath = getStoragePath();
      fs.writeFileSync(filePath, JSON.stringify(inMemoryLeads, null, 2), 'utf-8');
    } catch (e) {
      // Ignore background write errors
    }
    return true;
  }
  return false;
}
