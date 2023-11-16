/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


console.log(`Loading ABVR marzipano.js ${process.env.MARZIPANO_VERSION}...`);

export { default as WebGlStage } from './stages/WebGl';
export { default as WebGlCubeRenderer } from './renderers/WebGlCube';
export { default as WebGlFlatRenderer } from './renderers/WebGlFlat';
export { default as WebGlEquirectRenderer } from './renderers/WebGlEquirect';
export { default as registerDefaultRenderers } from './renderers/registerDefaultRenderers';
export { default as CubeGeometry } from './geometries/Cube';
export { default as FlatGeometry } from './geometries/Flat';
export { default as EquirectGeometry } from './geometries/Equirect';
export { default as RectilinearView } from './views/Rectilinear';
export { default as FlatView } from './views/Flat';
export { default as ImageUrlSource } from './sources/ImageUrl';
export { default as SingleAssetSource } from './sources/SingleAsset';
export { default as StaticAsset } from './assets/Static';
export { default as DynamicAsset } from './assets/Dynamic';
export { default as TextureStore } from './TextureStore';
export { default as Layer } from './Layer';
export { default as RenderLoop } from './RenderLoop';
export { default as KeyControlMethod } from './controls/Key';
export { default as DragControlMethod } from './controls/Drag';
export { default as QtvrControlMethod } from './controls/Qtvr';
export { default as ScrollZoomControlMethod } from './controls/ScrollZoom';
export { default as PinchZoomControlMethod } from './controls/PinchZoom';
export { default as VelocityControlMethod } from './controls/Velocity';
export { default as ElementPressControlMethod } from './controls/ElementPress';
export { default as Controls } from './controls/Controls';
export { default as Dynamics } from './controls/Dynamics';
export { default as Viewer } from './Viewer';
export { default as Scene } from './Scene';
export { default as Hotspot } from './Hotspot';
export { default as HotspotContainer } from './HotspotContainer';
export * as colorEffects from './colorEffects';
export { default as registerDefaultControls } from './controls/registerDefaultControls';
export { default as autorotate } from './autorotate';

import async from './util/async';
import cancelize from './util/cancelize';
import chain from './util/chain';
import clamp from './util/clamp';
import clearOwnProperties from './util/clearOwnProperties';
import cmp from './util/cmp';
import compose from './util/compose';
import * as convertFov from './util/convertFov';
import decimal from './util/decimal';
import defaults from './util/defaults';
import defer from './util/defer';
import degToRad from './util/degToRad';
import delay from './util/delay';
import * as dom from './util/dom';
import extend from './util/extend';
import hash from './util/hash';
import inherits from './util/inherits';
import mod from './util/mod';
import noop from './util/noop';
import now from './util/now';
import once from './util/once';
import pixelRatio from './util/pixelRatio';
import radToDeg from './util/radToDeg';
import real from './util/real';
import retry from './util/retry';
import tween from './util/tween';
import type from './util/type';


export const util = {
  async,
  cancelize,
  chain,
  clamp,
  clearOwnProperties,
  cmp,
  compose,
  convertFov,
  decimal,
  defaults,
  defer,
  degToRad,
  delay,
  dom,
  extend,
  hash,
  inherits,
  mod,
  noop,
  now,
  once,
  pixelRatio,
  radToDeg,
  real,
  retry,
  tween,
  type,
};

import bowser from 'bowser';
import { glMatrix } from 'gl-matrix';
import eventEmitter from 'minimal-event-emitter';
import hammerjs from 'hammerjs';

export const dependencies = {
  bowser,
  glMatrix,
  eventEmitter,
  hammerjs
};

window.Hammer = dependencies.hammerjs;
window.Bowser = dependencies.bowser;
window.glMatrix = dependencies.glMatrix;
