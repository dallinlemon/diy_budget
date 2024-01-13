import { BaseService } from './base-service';
import fsSync, { promises as fs } from 'fs';
import { FileManagerFlags, PathSeparator } from '../constants/file-manager.constants';
import * as path from 'path';
import { databaseExtension, databaseName, databasePath } from '../constants/dao.constants';

export default class FileManagerService extends BaseService {
  constructor() { 
    super();
  }

  //ensureExits

  //delete file
  //delete folder
  //create folder
  //create file
  //copy file
  //copy folder
  //move file
  //move folder
  //rename file
  //rename folder
  //read file
  //write file
  protected async ensureExits(filePath: string): Promise<boolean> {
    try {
      this.logger.info('FileManagerService', 'ensureExits', `${filePath}`);
      if (fsSync.existsSync(filePath)) {
        this.logger.trace('FileManagerService', 'ensureExits', `File exists: ${filePath}`);
        return Promise.resolve(true);
      } 
      return Promise.resolve(false);
    } catch (error) {
      this.logger.debug('FileManagerService', 'ensureExits', `Error: ${error.message}`);
      return Promise.reject(error);
    }
  }


  public async copyFile(copyFrom: string, copyTo: string): Promise<boolean> {
    this.logger.debug(FileManagerService.name, this.copyFile.name, `Copying file from ${copyFrom} to ${copyTo}`);
    try {
      this.ensureExits(copyFrom);
      await fs.copyFile(copyFrom, copyTo);
      this.logger.trace(FileManagerService.name, this.copyFile.name, `FileManagerService | File copied to ${copyTo}`);
      return Promise.resolve(true);
    } catch (error) {
      this.logger.debug(FileManagerService.name, this.copyFile.name, `FileManagerService | Error: ${error.message}`);
      return Promise.reject(error);
    }
    
  }

  public async deleteFile(filePath: string): Promise<boolean> {
    this.logger.debug(FileManagerService.name, this.deleteFile.name, `Deleting file ${filePath}`);
    try {
      await fs.unlink(filePath);
      this.logger.trace(FileManagerService.name, this.deleteFile.name, `FileManagerService | File deleted: ${filePath}`);
      return Promise.resolve(true);
    } catch (error) {
      this.logger.debug(FileManagerService.name, this.deleteFile.name, `File not deleted: ${error.message}`);
      return Promise.resolve(false);
    }
  }
}

// (async () => {
//   try { 
//     console.log('dirname: ', __dirname);
//     const fileManagerService = new FileManagerService();
//     const result = await fileManagerService.copyFile('../../backups/databases/file.txt', '');
//     console.log(`result: ${result}`);

//   } catch (error) {
//     console.log('found top level error');
//     console.log(error.message);
//   }
// })();