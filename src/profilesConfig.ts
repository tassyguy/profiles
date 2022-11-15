import * as vscode from 'vscode';

export class ProfilesConfig {
    public nightTheme: string = "Default Dark+";
    public nightIconTheme: string = "vs-minimal";
    public dayTheme: string = "Default Light+";
    public dayIconTheme: string = "vs-minimal";
    public quiet: boolean = false;

    public currentProfile: string = "default";

    public static load() {
        let config = new ProfilesConfig();
        config.currentProfile = vscode.workspace.getConfiguration('profiles').get('currentProfile') || config.currentProfile;
        config.quiet = vscode.workspace.getConfiguration('profiles').get('quiet') || config.quiet;

        return config;
    }

    public save() {
        vscode.workspace.getConfiguration("profiles")
    }
}