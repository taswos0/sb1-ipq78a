import { Application } from '@nativescript/core';
import { DatabaseService } from './shared/services/database.service';

const dbService = new DatabaseService();

dbService.initialize()
  .then(() => {
    Application.run({ moduleName: 'views/appointment-list/appointment-list-page' });
  })
  .catch(error => {
    console.error('Failed to initialize app:', error);
  });