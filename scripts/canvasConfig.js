/*
 * Global game parameters for the primary canvas.
 *
 * Copyright (C) 2020, Josh Don
 *
 * Project Sand is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Project Sand is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const __max_width = 560;
const __max_height = 480;

const width =  Math.trunc(visualViewport.width-1);
const height = width > visualViewport.height ? Math.trunc(visualViewport.height) :  Math.trunc(visualViewport.height-200);

const MAX_FPS = 120;
const DEFAULT_FPS = 60;

const MAX_NUM_PARTICLES = 1000;
