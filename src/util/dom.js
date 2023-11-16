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



export function prefixProperty(property) {

  var style = document.documentElement.style;
  var prefixList = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];

  for (var i = 0; i < prefixList.length; i++) {
    var prefix = prefixList[i];
    var capitalizedProperty = property[0].toUpperCase() + property.slice(1);
    var prefixedProperty = prefix + capitalizedProperty;

    if (prefixedProperty in style) {
      return prefixedProperty;
    }
  }

  return property;

}


export function getWithVendorPrefix(property) {
  var prefixedProperty = prefixProperty(property);
  return function getPropertyWithVendorPrefix(element) {
    return element.style[prefixedProperty];
  };

}


export function setWithVendorPrefix(property) {
  var prefixedProperty = prefixProperty(property);
  return function setPropertyWithVendorPrefix(element, val) {
    return (element.style[prefixedProperty] = val);
  };
}


export var setTransform = setWithVendorPrefix('transform');
export var setTransformOrigin = setWithVendorPrefix('transformOrigin');


export function setNullTransform(element) {
  setTransform(element, 'translateZ(0)');
}


export function setNullTransformOrigin(element) {
  setTransformOrigin(element, '0 0 0');
}


export function setAbsolute(element) {
  element.style.position = 'absolute';
}


export function setPixelPosition(element, x, y) {
  element.style.left = x + 'px';
  element.style.top = y + 'px';
}


export function setPixelSize(element, width, height) {
  element.style.width = width + 'px';
  element.style.height = height + 'px';
}


export function setNullSize(element) {
  element.style.width = element.style.height = 0;
}


export function setFullSize(element) {
  element.style.width = element.style.height = '100%';
}


export function setOverflowHidden(element) {
  element.style.overflow = 'hidden';
}


export function setOverflowVisible(element) {
  element.style.overflow = 'visible';
}


export function setNoPointerEvents(element) {
  element.style.pointerEvents = 'none';
}