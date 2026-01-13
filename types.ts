import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ConstructionClient {
  name: string;
  role: string;
  image: string;
}