import {Injectable} from '@angular/core';
import {EfoModuleConfig} from './config';

@Injectable({
    providedIn: 'root'
})
export class EfoConfigService {
    CONFIG_OPTIONS: EfoModuleConfig;

    constructor(moduleConfig?: EfoModuleConfig) {
        this.CONFIG_OPTIONS = {
            ...new EfoModuleConfig(),
            ...moduleConfig
        };
    }

    getConfig(): EfoModuleConfig {
        return this.CONFIG_OPTIONS;
    }
}
