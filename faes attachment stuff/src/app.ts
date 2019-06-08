/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    Actor,
    AnimationEaseCurves,
    AnimationKeyframe,
    AnimationWrapMode,
    ButtonBehavior,
    Context,
    Quaternion,
    TextAnchorLocation,
    Vector3,
    Attachment,
    User,
    
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';
import { userInfo } from 'os';
import { InternalUser } from '@microsoft/mixed-reality-extension-sdk/built/types/internal/user';
import { start } from 'repl';
import { get } from 'https';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    [x: string]: any;
    private text: Actor = null;
    private cube: Actor = null;

    constructor(private context: Context, private baseUrl: string) {
        this.context.onStarted(() => this.started());

    }

    /**
     * Once the context is "started", initialize the app.
     */
    private started() {
        // 
( (userId: string) => {
        // AltspaceVR resource IDs from https://account.altvr.com/kits/
        const model = Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 989569229617365197",
            actor: {
                name: 'Cube',
                transform: {
                }
         }
     }).value;
     model.attach(userId, "left-ring");
    })
}
}
