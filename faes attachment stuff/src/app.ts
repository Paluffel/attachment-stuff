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
 // AltspaceVR resource IDs from https://account.altvr.com/kits/
 const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
 libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
     resourceId: "artifact: 989569229617365197",
     actor: {
         name: 'Cube',
         transform: {
             position: { x: 0, y: 0.0, z: 0 },
             rotation: MRE.Quaternion.RotationAxis(MRE.Vector3.Up(), -180.0 * MRE.DegreesToRadians),
             scale: { x: 0.4, y: 0.4, z: 0.4 }
         }
     }
 }));
         // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
        libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
            if (actor) {
                const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

                // Trigger the grow/shrink animations on hover.
                buttonBehavior.onClick('pressed', (userId: string) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1260115133015785930",
                        actor: {
                            name: 'Display3 00 ',
                            transform: {
                                position: { x: 0, y: 0, z: 0 },
                                rotation: MRE.Quaternion.RotationAxis(MRE.Vector3.Up(), -180.0 * MRE.DegreesToRadians),
                                scale: { x: 0.4, y: 0.4, z: 0.4 }
                            },
                        },
                        attachment: {
                            attachPoint: 'head',
                            userId
                        }
                    }))
                })
            }
        })
    }
}
// AltspaceVR resource IDs from https://account.altvr.com/kits/
const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
    resourceId: "artifact: 989569229617365197",
    actor: {
        name: 'Cube',
        transform: {
            position: { x: 0, y: 0.5, z: 0 },
            rotation: MRE.Quaternion.RotationAxis(MRE.Vector3.Up(), -180.0 * MRE.DegreesToRadians),
            scale: { x: 0.4, y: 0.4, z: 0.4 }
        }
    }
}));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
       // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
       libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
           if (actor) {
               const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

               // Trigger the grow/shrink animations on hover.
               buttonBehavior.onClick('pressed', (userId: string) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                   libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                       resourceId: "artifact: 1260115127378641353",
                       actor: {
                           name: 'Display3 01',
                           transform: {
                               position: { x: 0, y: 0, z: 0 },
                               rotation: MRE.Quaternion.RotationAxis(MRE.Vector3.Up(), -180.0 * MRE.DegreesToRadians),
                               scale: { x: 0.4, y: 0.4, z: 0.4 }
                           },
                       },
                       attachment: {
                           attachPoint: 'head',
                           userId
                       }
                   }))
               })
           }
       })
