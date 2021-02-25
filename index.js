/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2019 Open Assessment Technologies SA;
 */

/**
 * The shared supported browsers by TAO :
 *  - last 2 versions of Chrome, Firefox, Edge and Safari
 *  - last 2 version of Chrome and Firefox for Android, and iOS browsers
 *  - IE 11
 * See https://www.taotesting.com/get-tao/system-requirements/
 * See https://github.com/browserslist/browserslist#shareable-configs
 */
module.exports = [
    'last 2 maintained chrome versions',
    'last 2 maintained and_chr versions',
    'last 2 maintained and_ff versions',
    'last 2 maintained firefox versions',
    'last 2 maintained ios major versions',
    'last 2 maintained safari versions',
    'last 2 maintained edge versions',
    'ie 11'
];
