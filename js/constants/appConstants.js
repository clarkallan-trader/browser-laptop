/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file, * You can obtain one at http://mozilla.org/MPL/2.0/. */

const mapValuesByKeys = require('../lib/functional').mapValuesByKeys

const _ = null
const appConstants = {
  APP_NEW_WINDOW: _,
  APP_WINDOW_READY: _,
  APP_CLOSE_WINDOW: _,
  APP_WINDOW_CLOSED: _,
  APP_WINDOW_CREATED: _,
  APP_WINDOW_UPDATED: _,
  APP_TAB_STRIP_EMPTY: _,
  APP_TAB_CLOSED: _,
  APP_TAB_UPDATED: _,
  APP_ADD_HISTORY_SITE: _,
  APP_SET_STATE: _,
  APP_REMOVE_HISTORY_SITE: _,
  APP_MERGE_DOWNLOAD_DETAIL: _, // Sets an individual download detail
  APP_CLEAR_COMPLETED_DOWNLOADS: _, // Removes all completed downloads
  APP_SET_DATA_FILE_ETAG: _,
  APP_SET_DATA_FILE_LAST_CHECK: _,
  APP_SET_RESOURCE_ENABLED: _,
  APP_RESOURCE_READY: _,
  APP_ADD_RESOURCE_COUNT: _,
  APP_UPDATE_LAST_CHECK: _,
  APP_SET_UPDATE_STATUS: _,
  APP_CHANGE_SETTING: _,
  APP_CHANGE_SITE_SETTING: _,
  APP_REMOVE_SITE_SETTING: _,
  APP_CLEAR_SITE_SETTINGS: _,
  APP_ON_CLEAR_BROWSING_DATA: _,
  APP_IMPORT_BROWSER_DATA: _,
  APP_SHOW_NOTIFICATION: _, /** @param {Object} detail */
  APP_HIDE_NOTIFICATION: _, /** @param {string} message */
  APP_BACKUP_KEYS: _,
  APP_RECOVER_WALLET: _,
  APP_ADD_AUTOFILL_ADDRESS: _,
  APP_REMOVE_AUTOFILL_ADDRESS: _,
  APP_ADD_AUTOFILL_CREDIT_CARD: _,
  APP_REMOVE_AUTOFILL_CREDIT_CARD: _,
  APP_AUTOFILL_DATA_CHANGED: _,
  APP_SET_LOGIN_REQUIRED_DETAIL: _,
  APP_SET_LOGIN_RESPONSE_DETAIL: _,
  APP_WINDOW_BLURRED: _,
  APP_IDLE_STATE_CHANGED: _,
  APP_NETWORK_CONNECTED: _,
  APP_NETWORK_DISCONNECTED: _,
  APP_CHANGE_NEW_TAB_DETAIL: _,
  APP_FRAME_CHANGED: _,
  APP_TAB_CREATED: _,
  APP_TAB_MOVED: _,
  APP_TAB_DETACH_MENU_ITEM_CLICKED: _,
  APP_TAB_ATTACHED: _,
  APP_TAB_WILL_ATTACH: _,
  APP_TAB_ACTIVATE_REQUESTED: _,
  APP_TAB_INDEX_CHANGE_REQUESTED: _,
  APP_TAB_CLOSE_REQUESTED: _,
  APP_CREATE_TAB_REQUESTED: _,
  APP_LOAD_URL_REQUESTED: _,
  APP_LOAD_URL_IN_ACTIVE_TAB_REQUESTED: _,
  APP_SIMPLE_SHARE_ACTIVE_TAB_REQUESTED: _,
  APP_NEW_WEB_CONTENTS_ADDED: _,
  APP_TAB_DESTROYED: _,
  APP_SET_MENUBAR_TEMPLATE: _,
  APP_UPDATE_ADBLOCK_DATAFILES: _,
  APP_UPDATE_ADBLOCK_CUSTOM_RULES: _,
  APP_DEFAULT_BROWSER_UPDATED: _,
  APP_DEFAULT_BROWSER_CHECK_COMPLETE: _,
  APP_POPULATE_HISTORY: _,
  APP_RENDER_URL_TO_PDF: _,
  APP_DATA_URL_COPIED: _,
  APP_DOWNLOAD_REVEALED: _,
  APP_DOWNLOAD_OPENED: _,
  APP_DOWNLOAD_ACTION_PERFORMED: _,
  APP_DOWNLOAD_COPIED_TO_CLIPBOARD: _,
  APP_DOWNLOAD_DELETED: _,
  APP_DOWNLOAD_CLEARED: _,
  APP_DOWNLOAD_REDOWNLOADED: _,
  APP_DOWNLOAD_DEFAULT_PATH: _,
  APP_SHOW_DOWNLOAD_DELETE_CONFIRMATION: _,
  APP_HIDE_DOWNLOAD_DELETE_CONFIRMATION: _,
  APP_ALLOW_FLASH_ONCE: _,
  APP_ALLOW_FLASH_ALWAYS: _,
  APP_FLASH_PERMISSION_REQUESTED: _,
  APP_SHUTTING_DOWN: _,
  APP_CLIPBOARD_TEXT_UPDATED: _,
  APP_TAB_TOGGLE_DEV_TOOLS: _,
  APP_TAB_CLONED: _,
  APP_SET_OBJECT_ID: _,
  APP_CREATE_SYNC_CACHE: _,
  APP_PENDING_SYNC_RECORDS_ADDED: _,
  APP_PENDING_SYNC_RECORDS_REMOVED: _,
  APP_SAVE_SYNC_DEVICES: _,
  APP_SAVE_SYNC_INIT_DATA: _,
  APP_RESET_SYNC_DATA: _,
  APP_SET_SYNC_SETUP_ERROR: _,
  APP_ADD_NOSCRIPT_EXCEPTIONS: _,
  APP_TAB_MESSAGE_BOX_SHOWN: _,
  APP_TAB_MESSAGE_BOX_DISMISSED: _,
  APP_TAB_MESSAGE_BOX_UPDATED: _,
  APP_NAVIGATOR_HANDLER_REGISTERED: _,
  APP_NAVIGATOR_HANDLER_UNREGISTERED: _,
  APP_TOP_SITE_DATA_AVAILABLE: _,
  APP_URL_BAR_TEXT_CHANGED: _,
  APP_URL_BAR_SUGGESTIONS_CHANGED: _,
  APP_SEARCH_SUGGESTION_RESULTS_AVAILABLE: _,
  APP_DEFAULT_SEARCH_ENGINE_LOADED: _,
  APP_TAB_PINNED: _,
  APP_DRAG_STARTED: _,
  APP_DRAG_ENDED: _,
  APP_DRAG_CANCELLED: _,
  APP_DATA_DROPPED: _,
  APP_DRAGGED_OVER: _,
  APP_ON_GO_BACK: _,
  APP_ON_GO_FORWARD: _,
  APP_ON_GO_TO_INDEX: _,
  APP_ON_GO_BACK_LONG: _,
  APP_ON_GO_FORWARD_LONG: _,
  APP_AUTOPLAY_BLOCKED: _,
  APP_AUTOPLAY_DISMISSED: _,
  APP_SAVE_PASSWORD: _,
  APP_UPDATE_PASSWORD: _,
  APP_ADD_PASSWORD: _, /** @param {Object} passwordDetail */
  APP_REMOVE_PASSWORD: _, /** @param {Object} passwordDetail */
  APP_REMOVE_PASSWORD_SITE: _, /** @param {Object} passwordDetail */
  APP_CLEAR_PASSWORDS: _,
  APP_UPDATE_LOG_OPENED: _,
  APP_URL_BAR_SELECTED_INDEX_CHANGED: _,
  APP_ON_TOGGLE_BROWSING_DATA: _,
  APP_ON_CANCEL_BROWSING_DATA: _,
  APP_SET_SKIP_SYNC: _,
  APP_SWIPE_LEFT: _,
  APP_SWIPE_RIGHT: _,
  APP_ADD_BOOKMARK: _,
  APP_EDIT_BOOKMARK: _,
  APP_DEBUG_NO_REPORT_STATE_MODE_CLICKED: _,
  APP_SPELLING_SUGGESTED: _,
  APP_LEARN_SPELLING: _,
  APP_FORGET_LEARNED_SPELLING: _,
  APP_SET_VERSION_INFO: _,
  APP_ON_PINNED_TAB_REORDER: _,
  APP_ADD_BOOKMARK_FOLDER: _,
  APP_EDIT_BOOKMARK_FOLDER: _,
  APP_REMOVE_BOOKMARK_FOLDER: _,
  APP_REMOVE_BOOKMARK: _,
  APP_MOVE_BOOKMARK_FOLDER: _,
  APP_MOVE_BOOKMARK: _,
  APP_ENABLE_PEPPER_MENU: _,
  APP_INSPECT_ELEMENT: _,
  APP_ON_BOOKMARK_WIDTH_CHANGED: _,
  APP_ON_BOOKMARK_FOLDER_WIDTH_CHANGED: _,
  APP_WINDOW_RESIZED: _,
  APP_ON_FAVICON_RECEIVED: _,
  APP_ON_PUBLISHER_OPTION_UPDATE: _,
  APP_ON_LEDGER_OPTION_UPDATE: _,
  APP_ON_LEDGER_WALLET_CREATE: _,
  APP_ON_BOOT_STATE_FILE: _,
  APP_LEDGER_PAYMENTS_PRESENT: _,
  APP_ON_WALLET_RECOVERY: _,
  APP_ON_BRAVERY_PROPERTIES: _,
  APP_ON_LEDGER_BALANCE_RECEIVED: _,
  APP_ON_LEDGER_LOCATION_UPDATE: _,
  APP_ON_WALLET_PROPERTIES: _,
  APP_ON_ADD_FUNDS_CLOSED: _,
  APP_ON_CHANGE_ADD_FUNDS_DIALOG_STEP: _,
  APP_ON_FIRST_LEDGER_SYNC: _,
  APP_ON_LEDGER_CALLBACK: _,
  APP_ON_TIME_UNTIL_RECONCILE: _,
  APP_ON_LEDGER_RUN: _,
  APP_ON_NETWORK_CONNECTED: _,
  APP_ON_RESET_RECOVERY_STATUS: _,
  APP_ON_LEDGER_INIT_READ: _,
  APP_ON_LEDGER_QR_GENERATED: _
}

module.exports = mapValuesByKeys(appConstants)
