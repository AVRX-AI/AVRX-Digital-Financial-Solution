/**
 * AVRX Lead Memory & Persistence Store
 */

import fs from 'fs';
import path from 'path';
import { LeadData } from './emailTemplates';

export interface LeadRecord extends LeadData {
  status: 'New' | 'Contacted' | 'Follow Up' | 'Converted' | 'Closed';
  emailStatus: 'sent' | 'failed' | 'simulated';
  emailError?: string;
  ipAddress?: string;
}

let inMemoryLeads: LeadRecord[] = [];

export function saveLead(lead: LeadRecord): void {
  try {
    inMemoryLeads.unshift(lead);
    if (inMemoryLeads.length > 500) {
      inMemoryLeads = inMemoryLeads.slice(0, 500);
    }
  } catch (err) {
    console.warn('[LEAD STORE] In-memory fallback');
  }
}

export function getAllLeads(): LeadRecord[] {
  return inMemoryLeads;
}
