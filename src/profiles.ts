import * as vscode from 'vscode';
import { ProfilesConfig } from './profilesConfig';
import * as fs from 'fs';
import * as path from 'path';

export class Profiles {

    constructor (private config: ProfilesConfig){
        
    }

    private run () {
        const userConfig = vscode.workspace.getConfiguration();
        const currentProfile = userConfig.get("profiles.currentProfile") || "default";

    }

    private setProfilesDirectory () {
        const userConfig = vscode.workspace.getConfiguration();
        const backupDirectory = userConfig.get("profiles.backupDirectory") || "default";
    }

    private loadProfile () {
        const userConfig = vscode.workspace.getConfiguration();
        const currentProfile = userConfig.get("profiles.currentProfile");

        console.log(currentProfile);


}