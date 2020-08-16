/*
   Support UICC Command
*/
var INS_SELECT = "A4";
var INS_MANAGE_CHANNEL = "70";
var INS_MANAGE_SECURE_CHANNEL = "73";
var INS_STATUS = "F2";
var INS_READ_BINARY = "B0";
var INS_UPDATE_BINARY = "D6";
var INS_READ_RECORD = "B2";
var INS_UPDATE_RECORD = "DC";
var INS_SEARCH_RECORD = "A2";
var INS_INCREASE = "32";
var INS_RETRIEVE_DATA = "CB";
var INS_SET_DATA = "DB";
var INS_VERIFY = "20";
var INS_CHANGE_PIN = "24";
var INS_DISABLE_PIN = "26";
var INS_ENABLE_PIN = "28";
var INS_UNBLOCK_PIN = "2C";
var INS_DEACTIVATE_FILE = "04";
var INS_ACTIVATE_FILE = "44";
var INS_AUTHENTICATE1 = "88";
var INS_AUTHENTICATE2 = "89";
var INS_GET_CHALLENGE = "84";
var INS_TERMINAL_CAPABILITY = "AA";
var INS_TERMINAL_PROFILE = "10";
var INS_ENVELOPE = "C2";
var INS_FETCH = "12";
var INS_TERMINAL_RESPONSE = "14";
var INS_TRANSACT_DATA = "75";
var INS_GET_RESPONSE = "C0";

var INS_CREATE_FILE_E0	= "E0";
var INS_DELETE_FILE_E4	= "E4";
var INS_DEACTIVATE_FILE_04	= "04";
var INS_ACTIVATE_FILE_44	= "44";
var INS_TERMINATE_DF_E6	= "E6";
var INS_TERMINATE_EF_E8	= "E8";
var INS_TERMINATE_CARD_USAGE_FE	= "FE";
var INS_RESIZE_FILE_D4	= "D4";

/*
FCP Template Tag
*/
var BTAG_FCP_FILE_DESC_82 = 	"82";
var BTAG_FCP_FILE_ID_83	= 		"83";
var BTAG_FCP_DF_NAME_84	= 		"84";
var BTAG_FCP_LCSI_8A = 			"8A";
var BTAG_FCP_SA_COMPACT_8C = 	"8C";
var BTAG_FCP_SA_EXPANDED_AB	= 	"AB";
var BTAG_FCP_SA_REFERENCED_AB = "8B";
var BTAG_FCP_TOTAL_FILE_SIZE_81="81";
var BTAG_FCP_PSDO_C6 = 			"C6";
var BTAG_FCP_PROPRIETARY_85 = 	"85";
var BTAG_FCP_PROPRIETARY_A5 = 	"A5";

var BTAG_FCP_FILE_SIZE_80 = 	"80";
var BTAG_FCP_SFI_88 = 			"88";

// Propriety A5_TLV
var BTAG_FCP_FILE_STATUS_BYE_C0="C0";
var BTAG_FCP_FILLING_PATTERN_C1="C1";
var BTAG_FCP_REPEAT_PATTERN_C2 ="C2";
var BTAG_FCP_MAX_FILE_SIZE_86 =	"86";
var BTAG_FCP_FILE_DETAILS_84 =	"84";
// Propriety A5_TLV for Select Response
var BTAG_FCP_UICC_CHARACTER_80= "80";
var BTAG_FCP_APP_POWER_81	=	"81";
var BTAG_FCP_MIN_CLOCK_82 =		"82";
var BTAG_FCP_AMOUNT_MEMORY_83 =	"83";
var BTAG_FCP_FILE_SIZE_85 =		"85";
var BTAG_FCP_SUPPORT_CMD_87 =	"87";
var BTAG_FCP_UICC_CONDITIONS_88="88";
var BTAG_FCP_PLAT_CAT_APDU_89 =	"89";

// PIN status template DO C6_TLV
var BTAG_FCP_PSDO_90 =			"90";
var BTAG_FCP_USAGE_QUALIFIER_DO_95 = "95";
var BTAG_FCP_KEY_REF_83 =		"83";


/*
   Support UICC Card application toolkit templates BER-TLV tag
*/
var BTAG_PRO_CMD_D0 = "D0";
var BTAG_SMS_PP_DL_D1 = "D1";
var BTAG_SMS_CB_DL_D2 = "D2";
var BTAG_MENU_SEL_D3 = "D3";
var BTAG_CALL_CTRL_D4 = "D4";
var BTAG_MO_SM_CTRL_D5 = "D5";
var BTAG_EVT_DL_D6 = "D6";
var BTAG_TIMER_EXP_D7 = "D7";
var BTAG_USSD_DL_D9 = "D9";
var BTAG_MMS_TRAN_STATUS_DA = "DA";
var BTAG_MMS_NOTI_DL_DB = "DB";
var BTAG_TERMINAL_APP_DC = "DC";
var BTAG_GEO_LOC_REPORT_DD = "DD";
var BTAG_ENV_CONTAINER_DE = "DE";

var CAT_BTAG_STRING = [];
CAT_BTAG_STRING[0x0]="Proactive Command";
CAT_BTAG_STRING[0x1]="GSM/3G/3GPP2 - SMS-PP Download";
CAT_BTAG_STRING[0x2]="GSM/3G/3GPP2 - Cell Broadcast Download";
CAT_BTAG_STRING[0x3]="Menu Selection";
CAT_BTAG_STRING[0x4]="Call Control";
CAT_BTAG_STRING[0x5]="GSM/3G/3GPP2 - MO Short Message control";
CAT_BTAG_STRING[0x6]="Event Download";
CAT_BTAG_STRING[0x7]="Timer Expiration";
CAT_BTAG_STRING[0x8]="Reserved for intra-UICC communication and not visible on the card interface";
CAT_BTAG_STRING[0x9]="3G - USSD Download";
CAT_BTAG_STRING[0xA]="MMS Transfer status";
CAT_BTAG_STRING[0xB]="MMS notification download";
CAT_BTAG_STRING[0xC]="Terminal application tag";
CAT_BTAG_STRING[0xD]="3G - Geographical Location Reporting tag";
CAT_BTAG_STRING[0xE]="Envelope Container";

/*
   Support UICC Card application toolkit data objects tag
*/
var CAT_DATA_TAG_DETAILS_01 = "01";
var CAT_DATA_TAG_DETAILS_81 = "81";
var CAT_DATA_TAG_DEV_ID_02 = "02";
var CAT_DATA_TAG_DEV_ID_82 = "82";
var CAT_DATA_TAG_RESULT_03 = "03";
var CAT_DATA_TAG_RESULT_83 = "83";
var CAT_DATA_TAG_DURATION_04 = "04";
var CAT_DATA_TAG_DURATION_84 = "84";
var CAT_DATA_TAG_ALPHA_ID_05 = "05";
var CAT_DATA_TAG_ALPHA_ID_85 = "85";
var CAT_DATA_TAG_ADDRESS_06 = "06";
var CAT_DATA_TAG_ADDRESS_86 = "86";
var CAT_DATA_TAG_CAPABILITY_CFG_07 = "07";
var CAT_DATA_TAG_CAPABILITY_CFG_87 = "87";
var CAT_DATA_TAG_SUBADDRESS_08 = "08";
var CAT_DATA_TAG_SUBADDRESS_88 = "88";
var CAT_DATA_TAG_SS_STRING_09 = "09";
var CAT_DATA_TAG_SS_STRING_89 = "89";
var CAT_DATA_TAG_USSD_STRING_0A = "0A";
var CAT_DATA_TAG_USSD_STRING_8A = "8A";
var CAT_DATA_TAG_SMS_TPDU_0B = "0B";
var CAT_DATA_TAG_SMS_TPDU_8B = "8B";
var CAT_DATA_TAG_CB_PAGE_0C = "0C";
var CAT_DATA_TAG_CB_PAGE_8C = "8C";
var CAT_DATA_TAG_TEXT_STRING_0D = "0D";
var CAT_DATA_TAG_TEXT_STRING_8D = "8D";
var CAT_DATA_TAG_TONE_OR_ECAT_PROFILE_0E = "0E";
var CAT_DATA_TAG_TONE_OR_ECAT_PROFILE_8E = "8E";
var CAT_DATA_TAG_ITEM_OR_ECAT_ID_0F  = "0F";
var CAT_DATA_TAG_ITEM_OR_ECAT_ID_8F  = "8F";
var CAT_DATA_TAG_ITEM_ID_OR_ENCAP_ENV_TYPE_10 = "10";
var CAT_DATA_TAG_ITEM_ID_OR_ENCAP_ENV_TYPE_90 = "90";
var CAT_DATA_TAG_RESP_LEN_OR_CALL_CTRL_RESULT_11 = "11";
var CAT_DATA_TAG_RESP_LEN_OR_CALL_CTRL_RESULT_91 = "91";
var CAT_DATA_TAG_FILE_LIST_OR_CAT_SERVICE_LIST_12 = "12";
var CAT_DATA_TAG_FILE_LIST_OR_CAT_SERVICE_LIST_92 = "92";
var CAT_DATA_TAG_LOC_INFO_13 = "13";
var CAT_DATA_TAG_LOC_INFO_93 = "93";
var CAT_DATA_TAG_IMEI_14 = "14";
var CAT_DATA_TAG_IMEI_94 = "94";
var CAT_DATA_TAG_HELP_REQ_15 = "15";
var CAT_DATA_TAG_HELP_REQ_95 = "95";
var CAT_DATA_TAG_NETWORK_MEASURE_RESULT_16 = "16";
var CAT_DATA_TAG_NETWORK_MEASURE_RESULT_96 = "96";

var CAT_DATA_TAG_DEFAULT_TEXT_17 = "17";
var CAT_DATA_TAG_DEFAULT_TEXT_97 = "97";
var CAT_DATA_TAG_ITEMS_NEXT_ACTION_INDICATOR_18_ONLY = "18";
var CAT_DATA_TAG_EVENT_LIST_19 = "19";
var CAT_DATA_TAG_EVENT_LIST_99 = "99";
var CAT_DATA_TAG_CAUSE_1A = "1A";
var CAT_DATA_TAG_CAUSE_9A = "9A";
var CAT_DATA_TAG_LOCATION_STATUS_1B = "1B";
var CAT_DATA_TAG_LOCATION_STATUS_9B = "9B";
var CAT_DATA_TAG_TRANSACTION_IDENTIFIE_1C = "1C";
var CAT_DATA_TAG_TRANSACTION_IDENTIFIE_9C = "9C";
var CAT_DATA_TAG_BCCH_CHANNEL_LIST_1D = "1D";
var CAT_DATA_TAG_BCCH_CHANNEL_LIST_9D = "9D";
var CAT_DATA_TAG_ICON_IDENTIFIER_1E = "1E";
var CAT_DATA_TAG_ICON_IDENTIFIER_9E = "9E";
var CAT_DATA_TAG_ITEM_ICON_IDENTIFIER_LIST_1F = "1F";
var CAT_DATA_TAG_ITEM_ICON_IDENTIFIER_LIST_9F = "9F";
var CAT_DATA_TAG_CARD_READER_STATUS_20 = "20";
var CAT_DATA_TAG_CARD_READER_STATUS_A0 = "A0";
var CAT_DATA_TAG_CARD_ATR_OR_ECAT_SEQUENCE_NUMBER_21 = "21";
var CAT_DATA_TAG_CARD_ATR_OR_ECAT_SEQUENCE_NUMBER_A1 = "A1";
var CAT_DATA_TAG_C_APDU_OR_ENCRYPTED_TLV_LIST_22 = "22";
var CAT_DATA_TAG_C_APDU_OR_ENCRYPTED_TLV_LIST_A2 = "A2";
var CAT_DATA_TAG_R_APDU_OR_SA_TEMPLATE_23 = "23";
var CAT_DATA_TAG_R_APDU_OR_SA_TEMPLATE_23 = "A3";
var CAT_DATA_TAG_TIMER_IDENTIFIER_24 = "24";
var CAT_DATA_TAG_TIMER_IDENTIFIER_A4 = "A4";
var CAT_DATA_TAG_TIMER_VALUE_25 = "25";
var CAT_DATA_TAG_TIMER_VALUE_A5 = "A5";
var CAT_DATA_TAG_DATE_TIME_AND_TIME_ZONE_26 = "26";
var CAT_DATA_TAG_DATE_TIME_AND_TIME_ZONE_A6 = "A6";
var CAT_DATA_TAG_CALL_CONTROL_REQUESTED_ACTION_27  = "27";
var CAT_DATA_TAG_CALL_CONTROL_REQUESTED_ACTION_A7  = "A7";
var CAT_DATA_TAG_AT_COMMAND_28 = "28";
var CAT_DATA_TAG_AT_COMMAND_A8 = "A8";
var CAT_DATA_TAG_AT_RESPONSE_29 = "29";
var CAT_DATA_TAG_AT_RESPONSE_A9 = "A9";
var CAT_DATA_TAG_BC_REPEAT_INDICATOR_2A = "2A";
var CAT_DATA_TAG_BC_REPEAT_INDICATOR_AA = "AA";
var CAT_DATA_TAG_IMMEDIATE_RESPONSE_2B = "2B";
var CAT_DATA_TAG_IMMEDIATE_RESPONSE_AB = "AB";
var CAT_DATA_TAG_DTMF_STRING_2C = "2C";
var CAT_DATA_TAG_DTMF_STRING_AC = "AC";
var CAT_DATA_TAG_LANGUAGE_2D = "2D";
var CAT_DATA_TAG_LANGUAGE_AD = "AD";
var CAT_DATA_TAG_TIMING_ADVANCE_2E = "2E";
var CAT_DATA_TAG_TIMING_ADVANCE_AE = "AE";
var CAT_DATA_TAG_AID_2F = "2F";
var CAT_DATA_TAG_AID_AF = "AF";
var CAT_DATA_TAG_BROWSER_IDENTITY_30 = "30";
var CAT_DATA_TAG_BROWSER_IDENTITY_B0 = "B0";
var CAT_DATA_TAG_URL_OR_URI_31 = "31";
var CAT_DATA_TAG_URL_OR_URI_B1 = "B1";
var CAT_DATA_TAG_BEARER_32 = "32";
var CAT_DATA_TAG_BEARER_B2 = "B2";
var CAT_DATA_TAG_PROVISIONING_REFERENCE_FILE_33 = "33";
var CAT_DATA_TAG_PROVISIONING_REFERENCE_FILE_B3 = "B3";
var CAT_DATA_TAG_BROWSER_TERMINATION_CAUSE_34 = "34";
var CAT_DATA_TAG_BROWSER_TERMINATION_CAUSE_B4 = "B4";
var CAT_DATA_TAG_BEARER_DESCRIPTION_35 = "35";
var CAT_DATA_TAG_BEARER_DESCRIPTION_B5 = "B5";
var CAT_DATA_TAG_CHANNEL_DATA_36 = "36";
var CAT_DATA_TAG_CHANNEL_DATA_B6 = "B6";
var CAT_DATA_TAG_CHANNEL_DATA_LENGTH_37 = "37";
var CAT_DATA_TAG_CHANNEL_DATA_LENGTH_B7 = "B7";
var CAT_DATA_TAG_CHANNEL_STATUS_38 = "38";
var CAT_DATA_TAG_CHANNEL_STATUS_B8 = "B8";
var CAT_DATA_TAG_BUFFER_SIZE_39 = "39";
var CAT_DATA_TAG_BUFFER_SIZE_B9 = "B9";
var CAT_DATA_TAG_CARD_READER_IDENTIFIER_OR_REFRESH_ENFORCEMENT_POLICY_3A = "3A";
var CAT_DATA_TAG_CARD_READER_IDENTIFIER_OR_REFRESH_ENFORCEMENT_POLICY_BA = "BA";
var CAT_DATA_TAG_FILE_UPDATE_INFORMATION_3B = "3B";
var CAT_DATA_TAG_FILE_UPDATE_INFORMATION_BB = "BB";
var CAT_DATA_TAG_UICC_TERMINAL_INTERFACE_TRANSPORT_LEVEL_3C = "3C";
var CAT_DATA_TAG_UICC_TERMINAL_INTERFACE_TRANSPORT_LEVEL_BC = "BC";
var CAT_DATA_TAG_NOT_USED_3D = "3D";
var CAT_DATA_TAG_NOT_USED_BD = "BD";
var CAT_DATA_TAG_OTHER_ADDRESS_DATA_DESTINATION_ADDRESS_3E = "3E";
var CAT_DATA_TAG_OTHER_ADDRESS_DATA_DESTINATION_ADDRESS_BE = "BE";
var CAT_DATA_TAG_ACCESS_TECHNOLOGY_3F = "3F";
var CAT_DATA_TAG_ACCESS_TECHNOLOGY_BF = "BF";
var CAT_DATA_TAG_DISPLAY_PARAMETERS_OR_DNS_SERVER_ADDRESS_40 = "40";
var CAT_DATA_TAG_DISPLAY_PARAMETERS_OR_DNS_SERVER_ADDRESS_C0 = "C0";
var CAT_DATA_TAG_SERVICE_RECORD_41 = "41";
var CAT_DATA_TAG_SERVICE_RECORD_C1 = "C1";
var CAT_DATA_TAG_DEVICE_FILTER_42 = "42";
var CAT_DATA_TAG_DEVICE_FILTER_C2 = "C2";
var CAT_DATA_TAG_SERVICE_SEARCH_43 = "43";
var CAT_DATA_TAG_SERVICE_SEARCH_C3 = "C3";
var CAT_DATA_TAG_ATTRIBUTE_INFORMATION_44 = "44";
var CAT_DATA_TAG_ATTRIBUTE_INFORMATION_C4 = "C4";
var CAT_DATA_TAG_SERVICE_AVAILABILITY_45 = "45";
var CAT_DATA_TAG_SERVICE_AVAILABILITY_C5 = "C5";
var CAT_DATA_TAG_ESN_46 = "46";
var CAT_DATA_TAG_ESN_C6 = "C6";
var CAT_DATA_TAG_NETWORK_ACCESS_NAME_47 = "47";
var CAT_DATA_TAG_NETWORK_ACCESS_NAME_C7 = "C7";
var CAT_DATA_TAG_CDMA_SMS_TPDU_48 = "48";
var CAT_DATA_TAG_CDMA_SMS_TPDU_C8 = "C8";
var CAT_DATA_TAG_REMOTE_ENTITY_ADDRESS_49 = "49";
var CAT_DATA_TAG_REMOTE_ENTITY_ADDRESS_C9 = "C9";
var CAT_DATA_TAG_I_WLAN_IDENTIFIER_4A = "4A";
var CAT_DATA_TAG_I_WLAN_IDENTIFIER_CA = "CA";
var CAT_DATA_TAG_I_WLAN_ACCESS_STATUS_4B = "4B";
var CAT_DATA_TAG_I_WLAN_ACCESS_STATUS_CB = "CB";
var CAT_DATA_TAG_RFU_4C = "4C";
var CAT_DATA_TAG_RFU_4D = "4D";
var CAT_DATA_TAG_RFU_4E = "4E";
var CAT_DATA_TAG_RFU_4F = "4F";
var CAT_DATA_TAG_TEXT_ATTRIBUTE_50 = "50";
var CAT_DATA_TAG_TEXT_ATTRIBUTE_D0 = "D0";
var CAT_DATA_TAG_ITEM_TEXT_ATTRIBUTE_LIST_51 = "51";
var CAT_DATA_TAG_ITEM_TEXT_ATTRIBUTE_LIST_D1 = "D1";
var CAT_DATA_TAG_PDP_CONTEXT_ACTIVATION_PARAMETER_52 = "52";
var CAT_DATA_TAG_PDP_CONTEXT_ACTIVATION_PARAMETER_D2 = "D2";
var CAT_DATA_TAG_CONTACTLESS_STATE_REQUEST_53 = "53";
var CAT_DATA_TAG_CONTACTLESS_STATE_REQUEST_D3 = "D3";
var CAT_DATA_TAG_CONTACTLESS_FUNCTIONALITY_STATE_54 = "54";
var CAT_DATA_TAG_CONTACTLESS_FUNCTIONALITY_STATE_D4 = "D4";
var CAT_DATA_TAG_CSG_CELL_SELECTION_STATUS = "55";
var CAT_DATA_TAG_CSG_CELL_SELECTION_STATUS = "D5";
var CAT_DATA_TAG_CSG_ID_56 = "56";
var CAT_DATA_TAG_CSG_ID_D6 = "D6";
var CAT_DATA_TAG_HNB_NAME_57 = "57";
var CAT_DATA_TAG_HNB_NAME_D7 = "D7";
var CAT_DATA_TAG_RFU_58 = "58";
var CAT_DATA_TAG_RFU_59 = "59";
var CAT_DATA_TAG_RFU_5A = "5A";
var CAT_DATA_TAG_RFU_5B = "5B";
var CAT_DATA_TAG_RFU_5C = "5C";
var CAT_DATA_TAG_RFU_5D = "5D";
var CAT_DATA_TAG_RFU_5E = "5E";
var CAT_DATA_TAG_RFU_5F = "5F";
var CAT_DATA_TAG_MAC_60 = "60";
var CAT_DATA_TAG_MAC_E0 = "E0";
var CAT_DATA_TAG_EMERGENCY_CALL_OBJECT_61 = "61";
var CAT_DATA_TAG_EMERGENCY_CALL_OBJECT_E1 = "E1";
var CAT_DATA_TAG_IMEISV_62 = "62";
var CAT_DATA_TAG_IMEISV_E2 = "E2";
var CAT_DATA_TAG_BATTERY_STATE_63 = "63";
var CAT_DATA_TAG_BATTERY_STATE_E3 = "E3";
var CAT_DATA_TAG_BROWSING_STATUS_64 = "64";
var CAT_DATA_TAG_BROWSING_STATUS_E4 = "E4";
var CAT_DATA_TAG_NETWORK_SEARCH_MODE_65 = "65";
var CAT_DATA_TAG_NETWORK_SEARCH_MODE_E5 = "E5";
var CAT_DATA_TAG_FRAME_LAYOUT_66 = "66";
var CAT_DATA_TAG_FRAME_LAYOUT_E6 = "E6";
var CAT_DATA_TAG_FRAMES_INFORMATION_67 = "67";
var CAT_DATA_TAG_FRAMES_INFORMATION_E7 = "E7";
var CAT_DATA_TAG_FRAME_IDENTIFIER_68 = "68";
var CAT_DATA_TAG_FRAME_IDENTIFIER_E8 = "E8";
var CAT_DATA_TAG_UTRAN_E_UTRAN_MEASUREMENT_QUALIFIER_69 = "69";
var CAT_DATA_TAG_UTRAN_E_UTRAN_MEASUREMENT_QUALIFIER_E9 = "E9";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_REFERENCE_6A = "6A";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_REFERENCE_EA = "EA";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_IDENTIFIER_6B = "6B";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_IDENTIFIER_EB = "EB";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_TRANSFER_STATUS_6C = "6C";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_TRANSFER_STATUS_EC = "EC";
var CAT_DATA_TAG_MEID_6D = "6D";
var CAT_DATA_TAG_MEID_ED = "ED";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_CONTENT_IDENTIFIER_6E = "6E";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_CONTENT_IDENTIFIER_EE = "EE";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_NOTIFICATION_6F = "6F";
var CAT_DATA_TAG_MULTIMEDIA_MESSAGE_NOTIFICATION_EF = "EF";
var CAT_DATA_TAG_LAST_ENVELOPE_70 = "70";
var CAT_DATA_TAG_LAST_ENVELOPE_F0 = "F0";
var CAT_DATA_TAG_REGISTRY_APPLICATION_DATA_71 = "71";
var CAT_DATA_TAG_REGISTRY_APPLICATION_DATA_F1 = "F1";
var CAT_DATA_TAG_PLMNWACT_LIST_72  = "72";
var CAT_DATA_TAG_PLMNWACT_LIST_F2  = "F2";
var CAT_DATA_TAG_ROUTING_AREA_INFORMATION_73 = "73";
var CAT_DATA_TAG_ROUTING_AREA_INFORMATION_73 = "F3";
var CAT_DATA_TAG_UPDATE_ATTACH_TYPE_TAG_74 = "74";
var CAT_DATA_TAG_UPDATE_ATTACH_TYPE_TAG_F4 = "F4";
var CAT_DATA_TAG_REJECTION_CAUSE_CODE_75 = "75";
var CAT_DATA_TAG_REJECTION_CAUSE_CODE_F5 = "F5";
var CAT_DATA_TAG_GEOGRAPHICAL_LOCATION_PARAMETERS_OR_IARI_76 = "76";
var CAT_DATA_TAG_GEOGRAPHICAL_LOCATION_PARAMETERS_OR_IARI_F6 = "F6";
var CAT_DATA_TAG_GAD_SHAPES_OR_IMPU_LIST_77 = "77";
var CAT_DATA_TAG_GAD_SHAPES_OR_IMPU_LIST_F7 = "F7";
var CAT_DATA_TAG_NMEA_SENTENCE_OR_IMS_STATUS_CODE = "78";
var CAT_DATA_TAG_NMEA_SENTENCE_OR_IMS_STATUS_CODE = "F8";
var CAT_DATA_TAG_PLMN_LIST_79 = "79";
var CAT_DATA_TAG_PLMN_LIST_F9 = "F9";
var CAT_DATA_TAG_BROADCAST_NETWORK_INFORMATION_7A = "7A";
var CAT_DATA_TAG_BROADCAST_NETWORK_INFORMATION_FA = "FA";
var CAT_DATA_TAG_ACTIVATE_DESCRIPTOR_7B = "7B";
var CAT_DATA_TAG_ACTIVATE_DESCRIPTOR_FB = "FB";
var CAT_DATA_TAG_EPS_PDN_CONNECTION_ACTIVATION_PARAMETERS = "7C";
var CAT_DATA_TAG_EPS_PDN_CONNECTION_ACTIVATION_PARAMETERS = "FC";
var CAT_DATA_TAG_TRACKING_AREA_IDENTIFICATION_7D = "7D";
var CAT_DATA_TAG_TRACKING_AREA_IDENTIFICATION_FD = "FD";
var CAT_DATA_TAG_CSG_ID_LIST_7E = "7E";
var CAT_DATA_TAG_CSG_ID_LIST_FE = "FE";

/*
   Explain String for meaning of Bertlv tag 
*/
var CAT_TAG_MEANING = new Array();
CAT_TAG_MEANING[0x0]="No TAG";
CAT_TAG_MEANING[0x1]="Command details tag";
CAT_TAG_MEANING[0x2]="Device identity tag";
CAT_TAG_MEANING[0x3]="Result tag";
CAT_TAG_MEANING[0x4]="Duration tag";
CAT_TAG_MEANING[0x5]="Alpha identifier tag";
CAT_TAG_MEANING[0x6]="Address tag";
CAT_TAG_MEANING[0x7]="Capability configuration parameters tag";
CAT_TAG_MEANING[0x8]="Subaddress tag";
CAT_TAG_MEANING[0x9]="SS string tag";
CAT_TAG_MEANING[0xA]="USSD string tag";
CAT_TAG_MEANING[0xB]="SMS TPDU tag";
CAT_TAG_MEANING[0xC]="Cell Broadcast page tag";
CAT_TAG_MEANING[0xD]="Text string tag";
CAT_TAG_MEANING[0xE]="Tone tag or eCAT client profile";
CAT_TAG_MEANING[0xF]="Item tag or eCAT client identity";
CAT_TAG_MEANING[0x10]="Item identifier tag or Encapsulated envelope type";
CAT_TAG_MEANING[0x11]="Response length tag or Call control result tag";
CAT_TAG_MEANING[0x12]="File List tag or CAT service list tag";
CAT_TAG_MEANING[0x13]="Location Information tag";
CAT_TAG_MEANING[0x14]="IMEI tag";
CAT_TAG_MEANING[0x15]="Help request tag";
CAT_TAG_MEANING[0x16]="Network Measurement Results tag";
CAT_TAG_MEANING[0x17]="Default Text tag";
CAT_TAG_MEANING[0x18]="Items Next Action Indicator tag";
CAT_TAG_MEANING[0x19]="Event list tag";
CAT_TAG_MEANING[0x1A]="Cause tag";
CAT_TAG_MEANING[0x1B]="Location status tag";
CAT_TAG_MEANING[0x1C]="Transaction identifier tag";
CAT_TAG_MEANING[0x1D]="BCCH channel list tag";
CAT_TAG_MEANING[0x1E]="Icon identifier tag";
CAT_TAG_MEANING[0x1F]="Item Icon identifier list tag";
CAT_TAG_MEANING[0x20]="Card reader status tag";
CAT_TAG_MEANING[0x21]="Card ATR tag or eCAT sequence number";
CAT_TAG_MEANING[0x22]="C-APDU tag or Encrypted TLV list";
CAT_TAG_MEANING[0x23]="R-APDU tag or SA template";
CAT_TAG_MEANING[0x24]="Timer identifier tag";
CAT_TAG_MEANING[0x25]="Timer value tag";
CAT_TAG_MEANING[0x26]="Date-Time and Time zone tag";
CAT_TAG_MEANING[0x27]="Call control requested action tag";
CAT_TAG_MEANING[0x28]="AT Command tag";
CAT_TAG_MEANING[0x29]="AT Response tag";
CAT_TAG_MEANING[0x2A]="BC Repeat Indicator tag";
CAT_TAG_MEANING[0x2B]="Immediate response tag";
CAT_TAG_MEANING[0x2C]="DTMF string tag";
CAT_TAG_MEANING[0x2D]="Language tag";
CAT_TAG_MEANING[0x2E]="Timing Advance tag";
CAT_TAG_MEANING[0x2F]="AID tag";
CAT_TAG_MEANING[0x30]="Browser Identity tag";
CAT_TAG_MEANING[0x31]="URL tag or URI tag";
CAT_TAG_MEANING[0x32]="Bearer tag";
CAT_TAG_MEANING[0x33]="Provisioning Reference File tag";
CAT_TAG_MEANING[0x34]="Browser Termination Cause tag";
CAT_TAG_MEANING[0x35]="Bearer description tag";
CAT_TAG_MEANING[0x36]="Channel data tag";
CAT_TAG_MEANING[0x37]="Channel data length tag";
CAT_TAG_MEANING[0x38]="Channel status tag";
CAT_TAG_MEANING[0x39]="Buffer size tag";
CAT_TAG_MEANING[0x3A]="Card reader identifier tag or REFRESH Enforcement Policy tag";
CAT_TAG_MEANING[0x3B]="File Update Information tag";
CAT_TAG_MEANING[0x3C]="UICC/terminal interface transport level tag";
CAT_TAG_MEANING[0x3D]="Not used";
CAT_TAG_MEANING[0x3E]="Other address (data destination address) tag";
CAT_TAG_MEANING[0x3F]="Access Technology tag";
CAT_TAG_MEANING[0x40]="Display parameters tag or DNS server address";
CAT_TAG_MEANING[0x41]="Service Record tag";
CAT_TAG_MEANING[0x42]="Device Filter tag";
CAT_TAG_MEANING[0x43]="Service Search tag";
CAT_TAG_MEANING[0x44]="Attribute information tag";
CAT_TAG_MEANING[0x45]="Service Availability tag";
CAT_TAG_MEANING[0x46]="ESN tag";
CAT_TAG_MEANING[0x47]="Network Access Name tag";
CAT_TAG_MEANING[0x48]="CDMA-SMS-TPDU tag";
CAT_TAG_MEANING[0x49]="Remote Entity Address tag";
CAT_TAG_MEANING[0x4A]="I-WLAN Identifier tag";
CAT_TAG_MEANING[0x4B]="I-WLAN Access Status tag";
CAT_TAG_MEANING[0x4C]="RFU";
CAT_TAG_MEANING[0x4D]="RFU";
CAT_TAG_MEANING[0x4E]="RFU";
CAT_TAG_MEANING[0x4F]="RFU";

CAT_TAG_MEANING[0x50]="Text attribute tag";
CAT_TAG_MEANING[0x51]="Item text attribute list tag";
CAT_TAG_MEANING[0x52]="PDP context Activation parameter tag";
CAT_TAG_MEANING[0x53]="Contactless state request tag";
CAT_TAG_MEANING[0x54]="Contactless functionality state tag";
CAT_TAG_MEANING[0x55]="CSG cell selection status";
CAT_TAG_MEANING[0x56]="CSG ID";
CAT_TAG_MEANING[0x57]="HNB name";
CAT_TAG_MEANING[0x58]="RFU";
CAT_TAG_MEANING[0x59]="RFU";
CAT_TAG_MEANING[0x5A]="RFU";
CAT_TAG_MEANING[0x5B]="RFU";
CAT_TAG_MEANING[0x5C]="RFU";
CAT_TAG_MEANING[0x5D]="RFU";
CAT_TAG_MEANING[0x5E]="RFU";
CAT_TAG_MEANING[0x5F]="RFU";
CAT_TAG_MEANING[0x60]="MAC";
CAT_TAG_MEANING[0x61]="Emergency Call Object Tag";
CAT_TAG_MEANING[0x62]="IMEISV tag";
CAT_TAG_MEANING[0x63]="Battery state tag";
CAT_TAG_MEANING[0x64]="Browsing status tag";
CAT_TAG_MEANING[0x65]="Network Search Mode tag";
CAT_TAG_MEANING[0x66]="Frame Layout tag";
CAT_TAG_MEANING[0x67]="Frames Information tag";
CAT_TAG_MEANING[0x68]="Frame identifier tag";
CAT_TAG_MEANING[0x69]="UTRAN/E-UTRAN Measurement Qualifier tag";
CAT_TAG_MEANING[0x6A]="Multimedia Message Reference tag";
CAT_TAG_MEANING[0x6B]="Multimedia Message Identifier tag";
CAT_TAG_MEANING[0x6C]="Multimedia Message Transfer Status tag";
CAT_TAG_MEANING[0x6D]="MEID tag";
CAT_TAG_MEANING[0x6E]="Multimedia Message Content Identifier tag";
CAT_TAG_MEANING[0x6F]="Multimedia Message Notification tag";
CAT_TAG_MEANING[0x70]="Last Envelope tag";
CAT_TAG_MEANING[0x71]="Registry application data tag";
CAT_TAG_MEANING[0x72]="PLMNwAcT List tag";
CAT_TAG_MEANING[0x73]="Routing Area Information Tag";
CAT_TAG_MEANING[0x74]="Update/Attach Type Tag";
CAT_TAG_MEANING[0x75]="Rejection Cause Code Tag";
CAT_TAG_MEANING[0x76]="Geographical Location Parameters tag or IARI tag";
CAT_TAG_MEANING[0x77]="GAD Shapes tag or IMPU list tag";
CAT_TAG_MEANING[0x78]="NMEA sentence tag or IMS Status Code tag";
CAT_TAG_MEANING[0x79]="PLMN List tag";
CAT_TAG_MEANING[0x7A]="Broadcast Network Information tag or Extended registry application data tag";
CAT_TAG_MEANING[0x7B]="ACTIVATE descriptor tag";
CAT_TAG_MEANING[0x7C]="EPS PDN connection activation parameters tag";
CAT_TAG_MEANING[0x7D]="Tracking Area Identification tag";
CAT_TAG_MEANING[0x7E]="CSG ID list Tag";

var BR = "<br>";

var TAB = "&nbsp;&nbsp;&nbsp;&nbsp;";
var TAB2 = TAB + TAB;
var TAB3 = TAB2 + TAB;

var isProactiveCmd = 0;
var isAnalyzeResponse = 0;

function getCla(apduData) {
   var offset = 0;
   var cla = apduData.substr(offset, 2);
   return cla;
}

function getIns(apduData) {
   var cla = apduData.substr(2, 2);
   return cla;
}

function getP1(apduData) {
   var cla = apduData.substr(4, 2);
   return cla;
}

function getP2(apduData) {
   var cla = apduData.substr(6, 2);
   return cla;
}

function getLc(apduData) {
   var cla = apduData.substr(8, 2);
   return cla;
}

function getDataField(apduData, lcLength) {
    var data_field = apduData.substr(10, lcLength);
    return data_field;
}

function organizeDisplayDiv(cla, ins, p1, p2, lcHex, data_field) {
   $("#cla").html(cla);
   $("#ins").html(ins);
   $("#p1").html(p1);
   $("#p2").html(p2);
   $("#lc").html(lcHex);
   //$("#le").html("00");
   $("#data_field").html(data_field);
}

function numToHexString(num) {
   var numStrHex = num.toString(16).toUpperCase();
   if (num < 16) {
     numStrHex = "0" + numStrHex;
   }
   return numStrHex;
}

// get actual length information for Bertlv-Len
function getBerTLVLenInfo(lenData) {
   var lenInfo = [];
   var tagByteNum;
   var value = lenData.substr(0, 2);

   if (value == "82") {
      // 82XXXX
      tagByteNum = 3;
      value = lenData.substr(2, 4);
   } else if (value == "81") {
      // 81XX
      tagByteNum = 2;
      value = lenData.substr(2, 2);
   } else {
      // XX
      // value self
      tagByteNum = 1;
   }

   // Byte Number for Bertlv-Len
   lenInfo[0] = tagByteNum;
   // actual len for Bertlv-Len
   lenInfo[1] = parseInt("0x" + value);

   return lenInfo;   
}

function ignoreBit8ForTag(tag) {
	 tag = parseInt("0x" + tag);
     tag &= 0x7F;
     tag = numToHexString(tag);
     return tag;
}

/*
	00A40004027F10
*/
function analyzeSelect(apduData) {
	var cla = getCla(apduData);

	var ins = getIns(apduData);
	ins += " [SELECT]";

	var p1 = getP1(apduData);
	var dataMeaning;
	if (p1 == "00") {
		p1 += " [Select DF, EF or MF by file id]";
		dataMeaning = " [File ID]";
	} else if (p1 == "01") {
		p1 += " [Select child DF of the current DF]";
		dataMeaning = " [File ID]";
	} else if (p1 == "03") {
		p1 += " [Select parent DF of the current DF]";
		dataMeaning = " [File ID]";
	} else if (p1 == "04") {
		p1 += " [Selection by DF name]";
		dataMeaning = " [Application ID]";
	} else if (p1 == "08") {
		p1 += " [Select by path from MF]";
		dataMeaning = " [File Path]";
	} else if (p1 == "09") {
		p1 += " [Select by path from current DF]";
		dataMeaning = " [File Path]";
	} else {
		p1 += " [RFU]";  
	}

	var p2 = getP2(apduData);
	var p2Hex = parseInt("0x" + p2);
	p2 += " [";
	if ((p2Hex & 0x03) == 0x00) {
		p2 += "First or only occurrence, "
	} else if ((p2Hex & 0x03) == 0x01) {
		p2 += "Last occurrence, "
	} else if ((p2Hex & 0x03) == 0x02) {
		p2 += "Next occurrence, "
	} else if ((p2Hex & 0x03) == 0x03) {
		p2 += "Previous occurrence, "
	}
	if ((p2Hex & 0x0C) == 0x04) {
		p2 += "Return FCP template, "
	} else if ((p2Hex & 0x0C) == 0x0C) {
		p2 += "No data returned, "
	} 

	if (p1 == "04") {
		if ((p2Hex & 0x60) == 0x00) {
			p2 += "Activation/Reset, "
		} else if ((p2Hex & 0x60) == 0x40) {
			p2 += "Termination, "
		}
	}
	p2 += " ]";

   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);

   var data = getDataField(apduData, lc * 2);
   data += dataMeaning;

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, data);
}

function analyzeManageChannel(apduData) {
   var cla = getCla(apduData);

   var ins = getIns(apduData);
   ins += " [MANAGE CHANNEL]";

   var p1 = getP1(apduData);
   var original_p1 = p1;
   if (p1 == "00") {
      p1 += " [" + "Open the Supplementary Logical Channel" + "]";
   } else if (p1 == "80") {
      p1 += " [" + "Close the Supplementary Logical Channel" + "]";
   }

   var p2 = getP2(apduData);
   if (original_p1 == "00" && p2 == "00") {
      p2 += " [" + " Open next available Supplementary Logical Channel" + "]";
   } else {
      p2 += " [" + " Supplementary Logical Channel Number" + "]";
   }

   /*
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var le = "00";
   if (lc != 0) {
      le = lcHex;
   }
   */

   organizeDisplayDiv(cla, ins, p1, p2, "Not present", "Not present");
}

// Envelope Commands
function analyzeEnvelope(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   ins += " [ENVELOPE]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   var showAnalyseData;
   var btag = lcData.substr(0, 2);

   var lenInfo = getBerTLVLenInfo(lcData.substr(2));
   var tagByteNum = lenInfo[0];
   lc -= (1 + tagByteNum);	// exclude byte number for tag + len
   lcData = lcData.substr((1 + tagByteNum) * 2); // bertlv-list

   var btagMeaning = "";
   switch (btag) {
      case BTAG_SMS_PP_DL_D1:
         showAnalyseData = analyzeEnvSMS_PP_DL(lcData, lc);
         break;
      case BTAG_SMS_CB_DL_D2:
         showAnalyseData = analyzeEnvCB_DL(lcData, lc);
         break;
      case BTAG_MENU_SEL_D3:
         showAnalyseData = analyzeEnvMENU_SEL(lcData, lc);
         break;
      case BTAG_CALL_CTRL_D4:
         showAnalyseData = analyzeEnvCALL_CTRL(lcData, lc);
         break;
      case BTAG_MO_SM_CTRL_D5:
         showAnalyseData = analyzeEnvMO_SM_CTRL(lcData, lc);
         break;
      case BTAG_EVT_DL_D6:
         showAnalyseData = analyzeEnvEVT_DL(lcData, lc);
         break;
      case BTAG_TIMER_EXP_D7:
         showAnalyseData = analyzeEnvTIMER_EXP(lcData, lc);
         break;
      case BTAG_USSD_DL_D9:
         showAnalyseData = analyzeEnvUSSD_DL(lcData, lc);
         break;
      case BTAG_MMS_TRAN_STATUS_DA:
         showAnalyseData = analyzeEnvMMS_TRAN_STATUS(lcData, lc);
         break;
      case BTAG_MMS_NOTI_DL_DB:
         showAnalyseData = analyzeEnvMMS_NOTI_DL(lcData, lc);
         break;
      case BTAG_TERMINAL_APP_DC:
         showAnalyseData = analyzeEnvTERMINAL_APP(lcData, lc);
         break;
      case BTAG_GEO_LOC_REPORT_DD:
         showAnalyseData = analyzeEnvGEO_LOC_REPORT(lcData, lc);
         break;
      case BTAG_ENV_CONTAINER_DE :
         showAnalyseData = analyzeEnvCONTAINER(lcData, lc);
         break;
      default:
      	 btagMeaning = "UNRECOGNIZED";
      	 showAnalyseData = lcData;
         break;
   }

   if (btagMeaning == "") {
      var index = parseInt("0x" + btag) - 0xD0;
      btagMeaning = CAT_BTAG_STRING[index];	
   }
   showAnalyseData = btag + " " + apduData.substr(12, tagByteNum * 2) + " [" + btagMeaning + "] <br>" + showAnalyseData;

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}
// Terminal Response Commands
function analyzeTerminalResponse(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   ins += " [Terminal Response]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   var showAnalyseData = analyzeEnvOrProTlvData(lcData, lc);
   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}
// Fetch Command
function analyzeFetch(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   ins += " [Fetch]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData) + "[Le:Length of expected data]";
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   var showAnalyseData = "";
   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}
// Terminal Profile Command
function analyzeTerminalProfile(apduData) {
	var cla = getCla(apduData);
	var ins = getIns(apduData);
	ins += " [Terminal Profile]";

	var p1 = getP1(apduData);
	var p2 = getP2(apduData);
	var lcHex = "0x" + getLc(apduData);
	var lc = parseInt(lcHex);
	var lcData = getDataField(apduData, lc * 2);

	var showAnalyseData = "";
	var nByte = 1;
	var value;
	var valueHex;
	var offset = 0;
	var meaning;
	while (offset < lc * 2) {
		value = lcData.substr(offset, 2);
		valueHex = parseInt("0x" + value);
		meaning = "";
		switch(nByte) {
			case 1:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Call Control by NAA,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "USSD string data object support in Call Control by USIM,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Timer expiration,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "SMS-PP data download,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Menu selection,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Cell Broadcast data download,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "SMS-PP data download,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Profile download,"
				}
				break;
			case 2:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Display Text,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "UCS2 Display supported,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "UCS2 Entry supported,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Call Control by NAA,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "MO short message control support,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Call Control by NAA,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Call Control by NAA,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Command result,"
				}
				break;
			case 3:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Proactive UICC: REFRESH,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: POLLING OFF,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: POLL INTERVAL,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: PLAY TONE,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Proactive UICC: MORE TIME,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Proactive UICC: GET INPUT,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: GET INKEY,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: DISPLAY TEXT,"
				}
				break;
			case 4:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "PROVIDE LOCAL INFORMATION (NMR),"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (MCC, MNC, LAC, Cell ID & IMEI,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: SET UP MENU,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: SET UP CALL,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Proactive UICC:SEND USSD,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Proactive UICC: SEND SS,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC:SEND SHORT MESSAGE with 3GPP-SMS-TPDU,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: SELECT ITEM,"
				}
				break;
			case 5:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Event: Card reader status,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Event: Idle screen available,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Event: User activity,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Event: Location status,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Event: Call disconnected,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Event: Call connected,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Event: MT call,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: SET UP EVENT LIST,"
				}
				break;
			case 6:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Event: Network Search Mode Change,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Event: Local Connection,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Event: Display parameters changed,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Event: Access Technology Change,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Event: Channel status,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Event: Data available,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Event: Browser Termination,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Event: Language selection,"
				}
				break;
			case 7:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: GET READER STATUS (Card reader identifier),"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Proactive UICC: GET READER STATUS (Card reader status),"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Proactive UICC: PERFORM CARD APDU,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: POWER OFF CARD,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: POWER ON CARD,"
				}
				break;
			case 8:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Call Control by NAA,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "SETUP CALL,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "RUN AT COMMAND,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "SET UP IDLE MODE TEXT,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "GET INKEY,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (date, time and time zone),"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: TIMER MANAGEMENT (get current value),"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: TIMER MANAGEMENT (start, stop),"
				}
				break;
			case 9:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (Access Technology),"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: LAUNCH BROWSER,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: LANGUAGE NOTIFICATION,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION, Timing Advance,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (language),"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (NMR),"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "SEND DTMF command,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "DISPLAY TEXT,"
				}
				break;
			case 10:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Soft Keys support for SET UP MENU,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Soft keys support for SELECT ITEM,"
				}
				break;
			case 11:
				if (value == "FF") {
					meaning += "RFU,"
				} else {
					meaning += "Maximum number of soft keys available";
				}
				break;
			case 12:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Proactive UICC: DECLARE SERVICE,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: GET SERVICE INFORMATION,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: SERVICE SEARCH,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: GET CHANNEL STATUS,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Proactive UICC: SEND DATA,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Proactive UICC: RECEIVE DATA,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: CLOSE CHANNEL,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: OPEN CHANNEL,"
				}
				break;
			case 13:
				meaning += "Number of channels supported by terminal:" + (valueHex & 0xE0) + ","
				if ((valueHex & 0x10) == 0x10) {
					meaning += "RS232,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "IrDA,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Bluetooth,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "GPRS,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "CSD,"
				}
				break;
			case 14:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Screen Sizing Parameters,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "No keypad available,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "No display capability,"
				}
				meaning += "Number of characters supported down the terminal display:" + (valueHex & 0x1F) + ","
				break;
			case 15:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Variable size fonts,"
				}
				meaning += "Number of characters supported across the terminal display:" + (valueHex & 0x7F) + ","
				break;
			case 16:
				meaning += "Width reduction when in a menu:" + (valueHex & 0xE0) + ","
				if ((valueHex & 0x10) == 0x10) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Text Attributes,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Text Scrolling ,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Text Wrapping,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Display can be resized,"
				}
				break;
			case 17:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "HSDPA,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "E-UTRAN,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Direct communication channel,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "UDP, UICC in client mode, local connection,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "TCP, UICC in client mode, local connection,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "TCP, UICC in server mode,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "UDP, UICC in client mode, remote connection,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "TCP, UICC in client mode, remote connection,"
				}
				break;
			case 18:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (Search Mode change),"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (IMEISV),"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Call control on GPRS,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (ESN),"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Proactive UICC: GET INKEY (Variable Timeout),"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "USB,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: GET INKEY (help is supported while waiting for immediate response or variable timeout),"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: DISPLAY TEXT (Variable Time out),"
				}
				break;
			case 19:
				if ((valueHex & 0xF0) != 0x00) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x0F) != 0x00) {
					meaning += "Reserved by TIA/EIA-136 ,"
				}
				break;
			case 20:
				meaning += "Reserved by CCAT,"
				break;
			case 21:
				if ((valueHex & 0xF0) != 0x00) {
					meaning += "RFU,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "CHTML,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "HTML,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "XHTML,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "WML,"
				}
				break;
			case 22:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Proactive UICC: DISPLAY MULTIMEDIA MESSAGE,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: SUBMIT MULTIMEDIA MESSAGE,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: RETRIEVE MULTIMEDIA MESSAGE,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Toolkit-initiated GBA,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Multi-media Calls in SET UP CALL ,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Proactive UICC: PLAY TONE (Melody tones and Themed tones supported),"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION(battery state),"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Support of UTRAN PS with extended parameters,"
				}
				break;
			case 23:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "USSD Data download and application mode,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (NMR(UTRAN/E-UTRAN)),"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (MEID),"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Geographical Location Reporting,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Alpha Identifier in REFRESH command supported by terminal,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "MMS notification download ,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: GET FRAMES STATUS ,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: SET FRAMES,"
				}
				break;
			case 24:
				if ((valueHex & 0xF0) != 0x00) {
					meaning += "RFU,"
				}
				meaning += "Maximum number of frames supported:" + (valueHex & 0x0F) + ","
				break;
			case 25:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Multiple access technologies supported in Event Access Technology Change and PROVIDE LOCAL INFORMATION,"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "E-UTRAN support in Event Network Rejection,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Event: HCI connectivity event,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Event Network Rejection,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Event: I-WLAN Access status,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Event: Frame Information changed,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Event: MMS Transfer status,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Event: Browsing status,"
				}
				break;
			case 26:
				if ((valueHex & 0xFC) != 0x00) {
					meaning += "RFU, for future event indication"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Event: Contactless state request,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Event : CSG Cell Selection,"
				}
				break;
			case 27:
				meaning += "RFU, bit = 0 (for future event indication)"
				break;
			case 28:
				if ((valueHex & 0xC0) != 0x00) {
					meaning += "RFU"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Font size small supported by Terminal,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Font size large supported by Terminal,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Font size normal supported by Terminal,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Alignment right supported by Terminal,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Alignment centre supported by Terminal,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Alignment left supported by Terminal,"
				}
				break;
			case 29:
				if ((valueHex & 0x80) != 0x00) {
					meaning += "RFU"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Style text background colour supported by Terminal,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Style text foreground colour supported by Terminal,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Style strikethrough supported by Terminal,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Style underlined supported by Terminal,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Style italic supported by Terminal,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Style bold supported by Terminal,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Style normal supported by Terminal,"
				}
				break;
			case 30:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Steering of Roaming for I-WLAN REFRESH support"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (Broadcast Network Information) ,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: GEOGRAPHICAL LOCATION REQUEST,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: ACTIVATE,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Steering of Roaming REFRESH support,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "TERMINAL APPLICATIONS,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION (WSID of the current I-WLAN connection),"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "I-WLAN bearer support,"
				}
				break;
			case 31:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Proactive UICC: Profile Container, Envelope Container, COMMAND CONTAINER and ENCAPSULATED SESSION CONTROL "
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "Support for IMS Registration event,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Support for Incoming IMS Data event,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Support of CAT over the modem interface,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Communication Control for IMS,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Confirmation parameters supported for OPEN CHANNEL in Terminal Server Mode,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Support of CSG cell discovery,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Proactive UICC: Contactless State Changed,"
				}
				break;
			case 32:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "Support of refresh enforcement policy"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "CAT service list for eCAT client,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Proactive UICC: Security for Profile Container, Envelope Container, COMMAND CONTAINER and ENCAPSULATED SESSION CONTROL,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Direct communication channel supported for OPEN CHANNEL in Terminal Server Mode,"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Launch parameters supported for OPEN CHANNEL in Terminal Server Mode,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Support of PROVIDE LOCATION INFORMATION, H(e)NB surrounding macrocells,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Support of PROVIDE LOCATION INFORMATION, H(e)NB IP address,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Support of IMS as a bearer for BIP,"
				}
				break;
			case 33:
				if ((valueHex & 0x80) == 0x80) {
					meaning += "(Proactive UICC: PROVIDE LOCAL INFORMATION (WLAN identifier of the current WLAN connection)"
				}
				if ((valueHex & 0x40) == 0x40) {
					meaning += "WLAN bearer support,"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "Event: WLAN Access status,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION(Supported Radio Access Technologies),"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "ProSe usage information reporting,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Event: Poll Interval Negotiation,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "Support of Network Access Name reuse indication for CLOSE CHANNEL related to packet data service bearer,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "Support of DNS server address request for OPEN CHANNEL related to packet data service bearer,"
				}
				break;
			case 34:
				if ((valueHex & 0xC0) != 0x00) {
					meaning += "RFU, bit = 0"
				}
				if ((valueHex & 0x20) == 0x20) {
					meaning += "REFRESH with 'eUICC Profile State Change' mode,"
				}
				if ((valueHex & 0x10) == 0x10) {
					meaning += "Proactive UICC: PROVIDE LOCAL INFORMATION(Supported Radio Access Technologies),"
				}
				if ((valueHex & 0x08) == 0x08) {
					meaning += "Media Type ‘Video’ supported for SET UP CALL and Call Control by USIM,"
				}
				if ((valueHex & 0x04) == 0x04) {
					meaning += "Media Type ‘Voice’ supported for SET UP CALL and Call Control by USIM,"
				}
				if ((valueHex & 0x02) == 0x02) {
					meaning += "IMS URI supported for SET UP CALL,"
				}
				if ((valueHex & 0x01) == 0x01) {
					meaning += "URI support for SEND SHORT MESSAGE,"
				}
				break;
			default:
				meaning += "RFU, bit = 0"
				break;
		}

		showAnalyseData += value + "[" + meaning + "]" + "<br>";

		nByte++;
		offset += 2;
	}

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
   analyze Device identities [ETSI_102223_8.7]

   Device identities tag ('02' or '82')
   Length = '02'
      Source device identity
      Destination device identity
	
	both Source and Destination device identities are coded as follows:
    • '01' = Keypad;
	• '02' = Display;
	• '03' = Earpiece;
	• '10' to '17' = Additional Card Reader x (0 to 7). Value assigned by terminal;
	• '21' to '27' = Channel with Channel identifier x (1 to 7). Value assigned by terminal in the Channel
	status Comprehension TLV of the TERMINAL RESPONSE following an OPEN CHANNEL
	command;
	• '31' to '3F' = eCAT client identifier (1 to F);
	• '81' = UICC;
	• '82' = terminal;
	• '83' = network;
*/
function analyzeDeviceIdentitiesTLV(lcData, offset, len) {
   var displayData = "";

   if (len != 2)
   {
   		return lcData.substr(offset, 2 * len);
   }

   var source_device = lcData.substr(offset, 2);
   var dest_device = lcData.substr(offset + 2, 2);

   displayData += getDeviceMeaning(source_device);
   displayData += getDeviceMeaning(dest_device);
   return displayData;
}
function getDeviceMeaning(device) {
	var meaning;
	switch (device) {
		case "01":
			meaning = "Keypad";
			break;
		case "02":
			meaning = "Display";
			break;
		case "03":
			meaning = "Earpiece";
			break;
		case "81":
			meaning = "UICC";
			break;
		case "82":
			meaning = "terminal";
			break;
		case "83":
			meaning = "network";
			break;
		default:
			if (device.substr(0, 1) == "3") {
				meaning = "eCAT client identifier";
			} else if (device.substr(0, 1) == "2") {
				meaning = "Channel with Channel identifier x (1 to 7)";
			} else if (device.substr(0, 1) == "1") {
				meaning = "Additional Card Reader x (0 to 7)";
			} else {
				meaning = "No Meaning";
			}
			
			break;
	}

	return device + "[" + meaning + "] ";
}

/*
   analyze Address [ETSI_102223_8.1]

   Address tag ('06' or '86')
   Length
      TPDU
*/
function analyzeAddressTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[TON and NPI]";
	displayData += lcData.substr(offset + 2, len * 2 - 2) + "[Dialling number string]";
    return displayData;
}

/*
	analyze Command Packet [ETSI_102225_5.1]
	
	Command Packet Length (CPL)					2
	Command Header Length (CHL)					1
	Security Parameter Indicator (SPI)			2
	Ciphering Key Identifier (KIc)				1
	Key Identifier (KID)						1
	Toolkit Application Reference (TAR)			3
	Counter (CNTR)								5
	Padding Counter (PCNTR)						1
	Redundancy Check (RC),Cryptographic Checksum (CC) or Digital Signature (DS)	4/8
	Secured data_field
*/
function analyzeCommandPacket(data, len) {
	var displayData = "";
	var offset = 0;
	var tmp;
	var mac;
	var macLen = 0;

	// CPL
	tmp = "<br>" + TAB3 + data.substr(offset, 4);
	displayData += tmp + "[CPL]";

	// CHL
	offset += 4;
	tmp = data.substr(offset, 2);
	displayData += tmp + "[CHL]" + "<br>";

	// SPI
	offset += 2;
	tmp = data.substr(offset, 2);
	displayData += TAB3 + tmp + "[SPI1:";
	tmp = parseInt("0x" + tmp);
	if ((tmp & 0x03) == 0x00) {
		displayData += "No RC, CC or DS";
	} else if ((tmp & 0x03) == 0x01)  {
		displayData += "Redundancy Check";
	} else if ((tmp & 0x03) == 0x02)  {
		displayData += "Cryptographic Checksum";
	} else {
		displayData += "Reserved for Digital Signature";
	}
	mac = tmp & 0x03;

	if ((tmp & 0x04) == 0x04) {
		displayData += ", " + "Ciphering";
	} else {
		displayData += ", " + "No Ciphering";
	}
	if ((tmp & 0x18) == 0x00) {
		displayData += ", " + "No counter available";
	} else if ((tmp & 0x18) == 0x08)  {
		displayData += ", " + "Counter available; no replay or sequence checking ";
	} else if ((tmp & 0x18) == 0x10)  {
		displayData += ", " + "Process if and only if counter value is higher than the value in the RE ";
	} else {
		displayData += ", " + "Process if and only if counter value is one higher than the value in the RE ";
	}
	displayData += "]" + "<br>";

	offset += 2;
	tmp = data.substr(offset, 2);
	displayData += TAB3 + tmp + "[SPI2:";
	tmp = parseInt("0x" + tmp);
	var tmpArray = ["No PoR reply to the SE", "PoR required to be sent to the SE", "PoR required only when an error has occurred", "Reserved"];
	displayData += tmpArray[tmp & 0x03];
	if ((tmp & 0x0C) == 0x00) {
		displayData += ", " + "No RC, CC or DS applied to PoR response to SE";
	} else if ((tmp & 0x0C) == 0x04)  {
		displayData += ", " + "PoR response with simple RC applied to it";
	} else if ((tmp & 0x0C) == 0x80)  {
		displayData += ", " + "PoR response with CC applied to it";
	} else {
		displayData += ", " + "Reserved for PoR response with DS applied to it";
	}
	if ((tmp & 0x10) == 0x10) {
		displayData += ", " + "PoR response shall be ciphered";
	} else {
		displayData += ", " + "PoR response shall not be ciphered";
	}
	if ((tmp & 0x20) == 0x20) {
		displayData += ", " + "PoR response shall be sent using SMS-SUBMIT";
	} else {
		displayData += ", " + "PoR response shall be sent using SMS-DELIVER-REPORT";
	}
	displayData += "]" + "<br>";

	// KIc
	offset += 2;
	tmp = data.substr(offset, 2);
	displayData += TAB3 + tmp + "[KIc:";
	tmp = parseInt("0x" + tmp);
	if ((tmp & 0x03) == 0x00) {
		displayData += "Algorithm known implicitly by both entities";
	} else if ((tmp & 0x03) == 0x01)  {
		displayData += "DES";
		if ((tmp & 0x0C) == 0x00) {
			displayData += ", " + "DES in CBC mode";
		} else if ((tmp & 0x0C) == 0x04) {
			displayData += ", " + "Triple DES in outer-CBC mode using two different keys";
		} else if ((tmp & 0x0C) == 0x08) {
			displayData += ", " + "Triple DES in outer-CBC mode using three different keys";
		} else {
			displayData += ", " + "DES in ECB mode";
		}
	} else if ((tmp & 0x03) == 0x02)  {
		displayData += "AES";
		if ((tmp & 0x0C) == 0x00) {
			displayData += ", " + "AES in CBC mode";
		} else {
			displayData += ", " + "Reserved";
		}
	} else {
		displayData += "proprietary Implementations";
	}
	displayData += ",KVN:" + ((tmp & 0xF0) >> 4) + "]" + "<br>";

	// KID
	offset += 2;
	tmp = data.substr(offset, 2);
	displayData += TAB3 + tmp + "[KID:";
	tmp = parseInt("0x" + tmp);
	if (mac == 0x02) {
		// CC
		if ((tmp & 0x03) == 0x00) {
			displayData += "Algorithm known implicitly by both entities";
			macLen = 8;
		} else if ((tmp & 0x03) == 0x01)  {
			displayData += "DES";
			if ((tmp & 0x0C) == 0x00) {
				displayData += ", " + "DES in CBC mode";
			} else if ((tmp & 0x0C) == 0x04) {
				displayData += ", " + "Triple DES in outer-CBC mode using two different keys";
			} else if ((tmp & 0x0C) == 0x08) {
				displayData += ", " + "Triple DES in outer-CBC mode using three different keys";
			} else {
				displayData += ", " + "DES in ECB mode";
			}
			macLen = 8;
		} else if ((tmp & 0x03) == 0x02)  {
			displayData += "AES";
			if ((tmp & 0x0C) == 0x00) {
				displayData += ", " + "AES in CMAC mode";
			} else {
				displayData += ", " + "Reserved";
			}
			macLen = 8;
		} else {
			displayData += "proprietary Implementations";
		}
	} else if (mac == 0x01) {
		// RC
		if ((tmp & 0x03) == 0x00) {
			displayData += "Algorithm known implicitly by both entities";
		} else if ((tmp & 0x03) == 0x01)  {
			displayData += "CRC";
			if ((tmp & 0x0C) == 0x00) {
				displayData += ", " + "CRC 16";
				macLen = 2;
			} else if ((tmp & 0x0C) == 0x04) {
				displayData += ", " + "CRC 32";
				macLen = 4;
			} else {
				displayData += ", " + "Reserved";
			}
		} else if ((tmp & 0x03) == 0x02)  {
			displayData += "Reserved";
		} else {
			displayData += "proprietary Implementations";
		}
	}
	displayData += ",KVN:" + ((tmp & 0xF0) >> 4) + "]" + "<br>";

	// TAR
	offset += 2;
	tmp = data.substr(offset, 6);
	displayData += TAB3 + tmp + "[TAR]";

	// CNTR
	offset += 6;
	tmp = data.substr(offset, 10);
	displayData += tmp + "[CNTR]";

	// PCNTR
	offset += 10;
	tmp = data.substr(offset, 2);
	displayData += tmp + "[PCNTR]";

	// MAC
	offset += 2;
	if (macLen != 0) {
		tmp = data.substr(offset, macLen * 2);
		displayData += tmp + (macLen == 8 ? "[CC]" : "[RC]");
		offset += macLen * 2;
	}

	tmp = data.substr(offset, len - offset);
	displayData += "<br>" + TAB3 + tmp + "[User Data]";

	return TAB + displayData;
}
/*
	analyze Response Packet [ETSI_102225_5.2]
	
	Response Packet Length (RPL)				2
	Response Header Length (RHL)				1
	Toolkit Application Reference (TAR)			3
	Counter (CNTR)								5
	Padding Counter (PCNTR)						1
	Response Status Code Octet                  1
	Redundancy Check (RC),Cryptographic Checksum (CC) or Digital Signature (DS)	4/8
	Additional Response Data
*/
function analyzeResponsePacket(data, len) {
	var displayData = "";
	var offset = 0;
	var tmp;
	var mac;
	var macLen = 0;
	var rhl;

	// RPL
	tmp = "<br>" + TAB3 + data.substr(offset, 4);
	displayData += tmp + "[RPL]";

	// RHL
	offset += 4;
	tmp = data.substr(offset, 2);
	rhl = parseInt("0x" + tmp);
	displayData += tmp + "[RHL]" + "<br>";

	// TAR
	offset += 2;
	tmp = data.substr(offset, 6);
	displayData += TAB3 + tmp + "[TAR]";

	// CNTR
	offset += 6;
	tmp = data.substr(offset, 10);
	displayData += tmp + "[CNTR]";

	// PCNTR
	offset += 10;
	tmp = data.substr(offset, 2);
	displayData += tmp + "[PCNTR]";

	// RSC
	offset += 2;
	tmp = data.substr(offset, 2);
	displayData += tmp + "[RSC:";
	if (tmp == "00") {
		displayData += "PoR OK";
	} else if (tmp == "01") {
		displayData += "RC/CC/DS failed";
	} else if (tmp == "02") {
		displayData += "CNTR low";
	} else if (tmp == "03") {
		displayData += "CNTR high";
	} else if (tmp == "04") {
		displayData += "CNTR Blocked";
	} else if (tmp == "05") {
		displayData += "Ciphering error";
	} else if (tmp == "06") {
		displayData += "Unidentified security error";
	} else if (tmp == "07") {
		displayData += "Insufficient memory";
	} else if (tmp == "08") {
		displayData += "more time";
	} else if (tmp == "09") {
		displayData += "TAR Unknown";
	} else if (tmp == "0A") {
		displayData += "Insufficient security level";
	} else if (tmp == "0B") {
		displayData += "Actual response data to be sent using SMS-SUBMIT";
	} else if (tmp == "0C") {
		displayData += "Actual response data to be sent using a ProcessUnstructuredSS-Request";
	} else {
		displayData += "Reserved for future use";
	}
	displayData += "]";

	// MAC
	offset += 2;
	macLen = rhl * 2 - (offset - 6); // 6:RPL(4)+RHL(2)
	tmp = data.substr(offset, macLen);
	if (macLen == 0) {
		displayData += tmp + "[No RC/CC]";
	} else {
		displayData += tmp + (macLen == 8 ? "[CC]" : "[RC]");
	}
	offset += macLen;

	tmp = data.substr(offset, len - offset);
	displayData += "<br>" + TAB3 + tmp + "[User Data]";

	return TAB + displayData;
}

/*
	analyze SMS TPDU [ETSI_131111_8.13]

	TPDU tag ('0B' or '8B')
    Length
    SMS TPDU
    	TP-MTI[1] TP_OA[2-12] TP-PID[1] TP-DCS[1] TP-SCTS[7] TP-UDL[1]
*/
function analyzeSMSTPDUTLV(lcData, offset, len) {
	var displayData = "";
	var udhi = 0;
	var tmpInt;
	var dcs;
	var backOffset = offset;

	// TP-MTI
	var tmp = lcData.substr(offset, 2); 
	displayData += tmp + "[TP-MTI:";
	tmp = parseInt("0x" + tmp)
	if ((tmp & 0x03) == 0x00) {
		displayData += "Deliver type,";
	}
	if ((tmp & 0x40) == 0x40) {
		displayData += "UDHI exist";
		udhi = 1;
	}
	displayData += "]";

	// Send SMS Proactive Command has TP-MR
	if (isProactiveCmd == 1) {
		offset += 2;
		tmp = lcData.substr(offset, 2); 
		displayData += tmp + "[TP-MR]";
	}

	// TP-OA[Count(1) + TON/NPI(1) + halfByteString(0-10)]
	offset += 2;
	tmp = lcData.substr(offset, 2); 
	tmp = parseInt("0x" + tmp)
	tmp = 2 + tmp / 2 + tmp % 2;	// actual len
	tmp = Math.floor(tmp);
	displayData += lcData.substr(offset, tmp * 2) + "[TP-OA]";

	// TP-PID
	offset += tmp * 2;
	tmp = lcData.substr(offset, 2); 
	displayData += tmp + "[TP-PID]";

	// TP-DCS
	offset += 2;
	tmp = lcData.substr(offset, 2); 
	displayData += tmp + "[TP-DCS:";
	dcs = tmp = parseInt("0x" + tmp)
	if ((tmp == 0xFA) || (tmp == 0x1A)) {
		displayData += "UCS2";
	} else if ((tmp == 0xF6) || (tmp == 0x16)) {
		displayData += "8-bit data";
	}  else if ((tmp == 0xF2) || (tmp == 0x12)) {
		displayData += "GSM 7 bit";
	}  
	displayData += "]";

	// TP-SCTS, 7Bytes
	offset += 2;
	// Send SMS Proactive Command has not TP-SCTS
	if (isProactiveCmd == 0) {
		tmp = lcData.substr(offset, 2 * 7); 
		displayData += tmp + "[TP-SCTS]";
		offset += 2 * 7;
	}

	// TP-UDL
	tmp = lcData.substr(offset, 2); 
	tmpInt = parseInt("0x" + tmp)	
	if ((tmp == 0xF2) || (tmp == 0x12)) {
		tmpInt = (tmpInt / 8) * 7 + (tmpInt & 0x07);
	}
	if (tmpInt > 140)
	{
		return "";
	}

	displayData += "<br>" + TAB2 + tmp + "[TP-UDL:" + tmpInt + "]" + "<br>";
	displayData += TAB3;

	// User Data
	offset += 2;
	displayData = analyzeTPUD(displayData, lcData, offset, tmpInt, udhi, dcs);

    return displayData;
}

/*
	TP-UD
*/
function analyzeTPUD(displayData, lcData, offset, len, udhi, dcs) {
	var tmp;
	var tmpInt;
	var backOffset = offset;

	// TP-UD
	if (udhi == 1) {
		// UDH Exist
		/*
		// GSM
		if ((dcs & 0x16) != 0x16 && (dcs & 0x1A) != 0x1A)
		{
			return "";
		}
		*/

		// UDH_LEN
		tmp = lcData.substr(offset, 2); 
		tmpInt = parseInt("0x" + tmp);
		offset += 2;
		displayData += tmp + "[UDHL]";

		var isConcate = 0;
		var isFormat = 0;
		var curSeqNo = 0;

		var tag;
		var tagLen;
		var udhInfo = "";
		// udh string
		tmp = lcData.substr(offset, 2 * tmpInt);
		// get udh info
		var tmpOffset = offset;
		while (tmpOffset < (offset + tmpInt * 2)) {
			tag = lcData.substr(tmpOffset, 2); 
			tagLen = lcData.substr(tmpOffset + 2, 2); 
			switch(tag)
			{
				case "00":
					if (tagLen != "03") {
						return "";
					}
					udhInfo += "Concate SMS - RefNo:" + lcData.substr(tmpOffset + 4, 2) +
							   "MaxNum:" + lcData.substr(tmpOffset + 6, 2) +
							   "SeqNo:" + lcData.substr(tmpOffset + 8, 2);
				    isConcate = 1;
				    curSeqNo = lcData.substr(tmpOffset + 8, 2);
				    curSeqNo = parseInt("0x" + curSeqNo);
					break;
				case "08":
					if (tagLen != "04") {
						return "";
					}
					udhInfo += "Concate SMS - RefNo:" + lcData.substr(tmpOffset + 4, 4) +
							   "MaxNum:" + lcData.substr(tmpOffset + 8, 2) +
							   "SeqNo:" + lcData.substr(tmpOffset + 10, 2);
				    isConcate = 1;
				    curSeqNo = lcData.substr(tmpOffset + 10, 2);
				    curSeqNo = parseInt("0x" + curSeqNo);
					break;

				case "70":
					if (tagLen != "00") {
						return "";
					}
					udhInfo += "Format";
					isFormat = 1;
					break;

				case "71":
					if (isProactiveCmd == 1) {
						if (tagLen != "00") {
							return "";
						}
						udhInfo += "Format";
						isFormat = 1;
					} else {
						return "";
					}

					break;
				default:
					return "";
			}

			tmpOffset += (2 + parseInt("0x" + tagLen)) * 2;
		}
		displayData += tmp + "[" + udhInfo + "]";

		// skip udh
		offset += tmpInt * 2;

		if (((isConcate == 0) && (isFormat == 1)) || ((isConcate == 1) && (isFormat == 1) && (curSeqNo == 1))) {
			// include cp packet
			if (isProactiveCmd == 0) {
				displayData += analyzeCommandPacket(lcData.substr(offset, 2 * len - (offset - backOffset)), 2 * len - (offset - backOffset));
			} else {
				displayData += analyzeResponsePacket(lcData.substr(offset, 2 * len - (offset - backOffset)), 2 * len - (offset - backOffset));
			}
		} else {
			displayData += lcData.substr(offset, 2 * len - (offset - backOffset)) + "[SMS PP Concate Format/Unformat Data]";
		}
	} else {
		// UDH Not Exist
		displayData += lcData.substr(offset, 2 * len - (offset - backOffset)) + "[SMS PP Single Unformat Data]";
	}

	return displayData;
}

/*
	Bearer Data:
		Message Id + User Data + Message Display Mode
*/
function analyzeBearerData(lcData, len) {
  	var displayData = "";
	var offset = 0;
	var tmp;

	var tag;
	var tagLen;
	var meaning;
	var udhi = 0;
	while (offset < len) {
		tag = lcData.substr(offset, 2);
		tagLen = lcData.substr(offset + 2, 2);

		switch (tag) 
		{
			// Message Id
			case "00":
				if (tagLen != "03") {
					return "";
				}
				meaning = "[Message Id:";
				if ((parseInt("0x" + lcData.substr(offset + 4, 2)) & 0xF0) == 0x10) {
					meaning += "deliver type,"
				}

				if ((parseInt("0x" + lcData.substr(offset + 8, 2)) & 0x08) != 0x00) {
					meaning += "exist udh"
					udhi = 1;
				}
				meaning += "]";
				break;

			// User Data
			case "01":
				var userData = "";
				var dcs = (parseInt("0x" + lcData.substr(offset + 4, 2)) >> 3) & 0x08;
				var tpUDL;

				displayData += "<br>" + TAB3 + lcData.substr(offset, (2 + parseInt("0x" + tagLen)) * 2) + "[User Data:";

				var tmpOff = offset + 4;
				var tmpLen = parseInt("0x" + tagLen) * 2;
				while (tmpOff < (offset + 4 + tmpLen)) {
					var str1 = lcData.substr(tmpOff, 2);
					var str2 = lcData.substr(tmpOff + 2, 2);
					var value1 = (parseInt("0x" + str1) << 0x05); 
					var value2 = (parseInt("0x" + str2) >> 0x03);

					var hexStr1 = numToHexString(value1);
					str1 = hexStr1.substr(hexStr1.length - 2, 2);
					var hexStr2 = numToHexString(value2);
					str2 = hexStr2.substr(hexStr2.length - 2, 2);
					value1 = parseInt("0x" + str1); 
					value2 = parseInt("0x" + str2);

					var value = value1 + value2;
					userData += numToHexString(value);
					tmpOff += 2;
				}
				tpUDL = userData.substr(0, 2);
				tpUDL = parseInt("0x" + tpUDL);
				if (udhi == 0 && dcs == 4) {
					tpUDL <<= 1;
				}

				if (udhi == 1 && dcs != 0) {
					return "";
				}

				displayData += "<br>" + TAB3 + userData.substr(0, 2) + "[TP-UDL:" + tpUDL + "]" + "<br>";;
				displayData += TAB3;
				// User Data
				displayData = analyzeTPUD(displayData, userData, 2, tpUDL, udhi, dcs) + "]";

				//displayData += "[User Data]";
				break;

			// Message Display Mode
			case "0F":
				meaning = "Message Display Mode";
				break;

			default:
				meaning = "No Care";
				break;
		}

		if (tag != "01") {
			displayData += lcData.substr(offset, (2 + parseInt("0x" + tagLen)) * 2) + "[" + meaning + "]";
		}
		offset += (2 + parseInt("0x" + tagLen)) * 2
	}

	return displayData;
}

/*
	CDMA SMS:
		Tag(48/C8)
		Len
		MSG_TYPE[M:1] + TeleServiceId[M] + Service Category[O] + Originating Address[M] + Originating Subaddress[O] + Bearer Reply Option[O] + Bearer Data[O]

	e.g.
	80C2000058D15682028381C8500000021002020300C6A8084400031000080F01E0013A01C01380000198A89108A8AD800100404099C920066203DF961F30E73807000000C310B41012090C18117C3C50082C581B78310C001000244000
*/
function analyzeCDMASmsData(lcData, offset, len) {
	var displayData = "";
	var tmp;

	len = len * 2; // string len
	tmp = lcData.substr(offset, 2);
	if (tmp == "00") {
		displayData += tmp + "[SMS Point-to-Point]";
	} else if (tmp == "01") {
		displayData += tmp + "[SMS Broadcaset]";
	} else {
		alert("Not Support!");
		return lcData;
	}

	offset += 2;

	var index = 0;
	var tag;
	var tagLen;
	var meaning;
	while (index < len) {
		tag = lcData.substr(offset + index, 2);
		tagLen = lcData.substr(offset + index + 2, 2);

		switch (tag) 
		{
			// TeleServiceId
			case "00":
				if (tagLen != "02") {
					return "";
				}
				meaning = "Tele Service Id";
				break;

			// Service Category
			case "01":
				if (tagLen != "02") {
					return "";
				}
				meaning = "Service Category";
				break;

			// Originating Address
			case "02":
				meaning = "Originating Address";
				break;

			// Originating Subaddress
			case "03":
				meaning = "Originating Subaddress";
				break;

			// Bearer Reply Option
			case "06":
				meaning = "Bearer Reply Option";
				break;

			// Bearer Data
			case "08":
				displayData += "<br>" + TAB2;
				displayData += lcData.substr(offset + index, 2 * 2) + "[Bearer Data]";
				displayData += "<br>" + TAB3
				displayData += analyzeBearerData(lcData.substr(offset + index + 4, parseInt("0x" + tagLen) * 2), parseInt("0x" + tagLen) * 2);
				break;

			default:
				meaning = "";
				break;
		}

		if (tag != "08") {
			if (tag != "") {
				meaning = "[" + meaning + "]";
			}
			displayData += lcData.substr(offset + index, (2 + parseInt("0x" + tagLen)) * 2) + meaning;
		}
		index += (2 + parseInt("0x" + tagLen)) * 2
	}

	return displayData;
}

/*
 Structure of ENVELOPE(SMS-PP DOWNLOAD)
   SMS-PP download tag
   Length
      Device identifies
      Address
      SMS TPDU(SMS-DELIVER)
 e.g.  
 PP1:
   80C2000041D13F820283810607919471227200008B30400C919471227208027FF6792040907505001D02700000181502012120B05000F00000000F00C7B76069475CD40CABCD
 PP2:
   80C2000046D144820283810607919471227200008B35400C919471227208027FF679204090750500220700030702017000001A1502012120B05000F00000000F00C2C8746544D2E196AB11SW9000
   80C200002CD12A820283810607919471227200008B1B400C919471227208027FF67920409075050008050003070202CD22
*/
function analyzeEnvSMS_PP_DL(lcData, lc) {
	var displayData = "";
	var offset = 0;

	// Envelope PP
	while (offset < lc * 2) {
		var lenInfo = getBerTLVLenInfo(lcData.substr(offset + 2));
		var tagByteNum = lenInfo[0];
		var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		var tag = lcData.substr(offset, 2);
		tag = ignoreBit8ForTag(tag); // ignore bit8
		// tag meaning
		displayData += TAB + lcData.substr(offset, 2) + " " + lcData.substr(offset + 2, tagByteNum * 2) + " [" + CAT_TAG_MEANING[parseInt("0x" + tag)] + "] <br>";
		switch (tag) {
			case CAT_DATA_TAG_DEV_ID_02:
				displayData += TAB2 + analyzeDeviceIdentitiesTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case CAT_DATA_TAG_ADDRESS_06:
				displayData += TAB2 + analyzeAddressTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case CAT_DATA_TAG_SMS_TPDU_0B:
				displayData += TAB2 + analyzeSMSTPDUTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case CAT_DATA_TAG_CDMA_SMS_TPDU_48:
				displayData += TAB2 + analyzeCDMASmsData(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			default:
				displayData += TAB2 + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
		}

		offset += (1 + tagByteNum + tag_len) * 2;
	}

	return displayData;
}

/*
   analyze Cell Broadcast page

   Cell Broadcast page tag ('0C' or '8C')
   Length[88]
   SN[2] + MI[2] + DCS[1] + PP[1] + UD[82]
*/
function analyzeCBPageTLV(lcData, offset, len) {
	var displayData = "";
    var tmp;
    var mi;
    var backOffset = offset;

	// SN
    tmp = lcData.substr(offset, 4);
    displayData += TAB + tmp + "[Serial Number]";

    // MI
    offset += 4;
    tmp = lcData.substr(offset, 4);
    displayData += tmp + "[Message Identifier]";
    mi = parseInt("0x" + tmp);

    // DCS
    offset += 4;
    tmp = lcData.substr(offset, 2);
    displayData += tmp + "[DCS]";

    // PP
    offset += 2;
    tmp = lcData.substr(offset, 2);
    displayData += tmp + "[Page Parameter:";
    tmp = parseInt("0x" + tmp);
    if (tmp == 0) {
    	tmp = 0x11;
    }
    displayData += "SeqNo:" + (tmp >> 4) + ",TotalNum:" + (tmp & 0x0F);
    displayData += "]";

    // UD
    offset += 2;
    if ((tmp >> 4) == 1) {
    	// first sms
    	if ((mi >= 0x1080) && (mi <= 0x109F)) {
    		// Format
			displayData += analyzeCommandPacket(lcData.substr(offset, 2 * len - (offset - backOffset)), 2 * len - (offset - backOffset));
    		displayData += "[SMS CB " + ((tmp & 0x0F) > 1 ? "Concate" : "Single") +  " Format Data]";

    		return displayData;
    	} 
    	/*
    	else if (((mi >= 0x0000) && (mi <= 0x03E7)) || 
       			   ((mi >= 0x1000) && (mi <= 0x107F)) || 
       			   ((mi >= 0x10A0) && (mi <= 0x10FF))) {
		   	// Unformat
		   	displayData += lcData.substr(offset, 2 * len - (offset - backOffset)) + "[SMS CB Concate/Single Unformat Data]";
       } 
       */
    }

    displayData += lcData.substr(offset, 2 * len - (offset - backOffset)) + "[SMS CB " + ((tmp & 0x0F) > 1 ? "Concate" : "Single") +  " Unformat Data]";

    return displayData;
}

/*
 Structure of ENVELOPE (CELL BROADCAST DOWNLOAD)
   Cell Broadcast Download tag
   Length
      Device identifies
      Cell Broadcast page(0C + Len[88] + SN[2] + MI[2] + DCS[1] + PP[1] + UD[82])
 e.g.  
 CB1:
   80C2000060D25E820283818C5800011080F60000181502012120B05002F00000000F002C791B46B3C50B50ABCD0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
 CB2:
   80C2000060D25E820283818C5800011080F61200761502012120B05002F00000000F00765147B726914718000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F30313233343536373839
   80C2000060D25E820283818C5800011080F6223A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000SW9000
*/
function analyzeEnvCB_DL(lcData, lc) {
    var displayData = "";
    var offset = 0;

	// Envelope CB
	while (offset < lc * 2) {
		var lenInfo = getBerTLVLenInfo(lcData.substr(offset + 2));
		var tagByteNum = lenInfo[0];
		var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		var tag = lcData.substr(offset, 2);
		tag = ignoreBit8ForTag(tag); // ignore bit8
		// tag meaning
		displayData += TAB + lcData.substr(offset, 2) + " " + lcData.substr(offset + 2, tagByteNum * 2) + " [" + CAT_TAG_MEANING[parseInt("0x" + tag)] + "] <br>";
		switch (tag) {
			case CAT_DATA_TAG_DEV_ID_02:
				displayData += TAB2 + analyzeDeviceIdentitiesTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case CAT_DATA_TAG_CB_PAGE_0C:
				displayData += TAB2 + analyzeCBPageTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			default:
				displayData += TAB2 + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
		}

		offset += (1 + tagByteNum + tag_len) * 2;
	}
    
	return displayData;
}


/*
   analyze Command details [ETSI_102223_8.6]

    1 Command details tag 1
	2 Length = '03' 1
	3 Command number 1
	4 Type of command 1
	5 Command Qualifier 1
*/
function analyzeCmdDetailsTLV(lcData, offset, len) {
   var displayData = "";

   if (len != 3)
   {
   		return lcData.substr(offset, 2 * len);
   }

   var cmdNumber = lcData.substr(offset, 2);
   var cmdType = lcData.substr(offset + 2, 2);
   var cmdQualifier = lcData.substr(offset + 4, 2);

   displayData += cmdNumber + "[Command number]";
   displayData += getProCmdTypeAndQualifier(cmdType, cmdQualifier);
   return displayData;
}
function getRefreshCmdQualifier(cmdQualifier) {
	var meaning;
	switch (cmdQualifier) {
		case "00":
			meaning = "NAA Initialization and Full File Change Notification";
			break;
		case "01":
			meaning = "File Change Notification";
			break;
		case "02":
			meaning = "NAA Initialization and File Change Notification";
			break;
		case "03":
			meaning = "NAA Initialization";
			break;
		case "04":
			meaning = "UICC Reset";
			break;
		case "05":
			meaning = "NAA Application Reset, only applicable for a 3G platform";
			break;
		case "06":
			meaning = "NAA Session Reset, only applicable for a 3G platform";
			break;
		case "07":
			meaning = "Steering of Roaming REFRESH support";
			break;
		case "08":
			meaning = "Steering of Roaming for I-WLAN";
			break;
		case "09":
			meaning = "eUICC Profile State Change";
			break;
		default:
			meaning = "reserved values";
			break;
	}

	return meaning;
}
function getSetUpCallCmdQualifier(cmdQualifier) {
	var meaning;
	switch (cmdQualifier) {
		case "00":
			meaning = "set up call, but only if not currently busy on another call";
			break;
		case "01":
			meaning = "set up call, but only if not currently busy on another call, with redial";
			break;
		case "02":
			meaning = "set up call, putting all other calls (if any) on hold";
			break;
		case "03":
			meaning = "set up call, putting all other calls (if any) on hold, with redial";
			break;
		case "04":
			meaning = "set up call, disconnecting all other calls (if any)";
			break;
		case "05":
			meaning = "set up call, disconnecting all other calls (if any), with redial";
			break;
		default:
			meaning = "reserved values";
			break;
	}

	return meaning;
}
function getInputOrInkeyQualifier(cmdType, cmdQualifier) {
	var qualifierMeaning;
	var qualifier = parseInt("0x" + cmdQualifier);
	if ((qualifier & 0x80) == 0x80) {
		qualifierMeaning = "help information available";
	} else {
		qualifierMeaning = "no help information available";
	}

	if (cmdType == "22") {
		if ((qualifier & 0x08) == 0x08) {
			qualifierMeaning += ", an immediate digit response (0 to 9, * and #) is requested";
		} else {
			qualifierMeaning += ", user response shall be displayed.";
		}

		if ((qualifier & 0x04) == 0x04) {
			qualifierMeaning += ", character sets defined by bit 1 and bit 2 are disabled and the 'Yes/No' response is requested";
		} else {
			qualifierMeaning += ", character sets defined by bit 1 and bit 2 are enabled";
		}
	} else {
		if ((qualifier & 0x08) == 0x08) {
			qualifierMeaning += ", user input to be in SMS packed format";
		} else {
			qualifierMeaning += ", user input to be in unpacked format";
		}

		if ((qualifier & 0x04) == 0x04) {
			qualifierMeaning += ", user input shall not be revealed in any way";
		} else {
			qualifierMeaning += ", terminal may echo user input on the display";
		}
	}

	if ((qualifier & 0x02) == 0x02) {
		qualifierMeaning += ", UCS2 alphabet";
	} else {
		qualifierMeaning += ", SMS default alphabet";
	}
	if ((qualifier & 0x01) == 0x01) {
		qualifierMeaning += ", alphabet set";
	} else {
		qualifierMeaning += ", digits (0 to 9, *, # and +) only";
	}
	return qualifierMeaning;
}
function getSelectItemQualifier(cmdQualifier) {
	var qualifierMeaning;
	var qualifier = parseInt("0x" + cmdQualifier);
	if ((qualifier & 0x80) == 0x80) {
		qualifierMeaning = "help information available";
	} else {
		qualifierMeaning = "no help information available";
	}

	if ((qualifier & 0x04) == 0x04) {
		qualifierMeaning += ", selection using soft key preferred";
	} else {
		qualifierMeaning += ", no selection preference";
	}

	if ((qualifier & 0x02) == 0x02) {
		qualifierMeaning += ", presentation as a choice of navigation options if bit 1 is '1'";
	} else {
		qualifierMeaning += ", presentation as a choice of data values if bit 1 = '1'";
	}
	if ((qualifier & 0x01) == 0x01) {
		qualifierMeaning += ", presentation type is specified in bit 2";
	} else {
		qualifierMeaning += ", presentation type is not specified";
	}
	return qualifierMeaning;
}
function getProvideLocalInfoQualifier(cmdQualifier) {
	var meaning;
	switch (cmdQualifier) {
		case "00":
			meaning = "Location Information according to current NAA(MCC, MNC, LAC/TAC, Cell Identity and Extended Cell Identity)";
			break;
		case "01":
			meaning = "IMEI of the terminal";
			break;
		case "02":
			meaning = "Network Measurement results according to current NAA";
			break;
		case "03":
			meaning = " Date, time and time zone";
			break;
		case "04":
			meaning = "Language setting";
			break;
		case "05":
			meaning = "Timing Advance";
			break;
		case "06":
			meaning = "Access Technology";
			break;
		case "07":
			meaning = "ESN of the terminal";
			break;
		case "08":
			meaning = "IMEISV of the terminal";
			break;
		case "09":
			meaning = "Search Mode";
			break;
		case "0A":
			meaning = "Charge State of the Battery (if class 'g' is supported)";
			break;
		case "0B":
			meaning = "MEID of the terminal";
			break;
		case "0C":
			meaning = "current WSID";
			break;
		case "0D":
			meaning = "Broadcast Network information according to current Broadcast Network Technology used";
			break;
		case "0E":
			meaning = "Multiple Access Technologies";
			break;
		case "0F":
			meaning = "Location Information for multiple access technologies";
			break;
		case "10":
			meaning = "Network Measurement results for multiple access technologies";
			break;
		case "11":
			meaning = "CSG ID list and corresponding HNB name";
			break;
		case "12":
			meaning = "H(e)NB IP address";
			break;
		case "13":
			meaning = "H(e)NB surrounding macrocells";
			break;
		case "14":
			meaning = "current WLAN identifier";
			break;
		default:
			meaning = "Reserved";
			break;
	}

	return meaning;
}
function getDisplayQualifier(cmdQualifier) {
	var qualifierMeaning;
	var qualifier = parseInt("0x" + cmdQualifier);
	if ((qualifier & 0x80) == 0x80) {
		qualifierMeaning = "wait for user to clear message";
	} else {
		qualifierMeaning = "clear message after a delay";
	}
	if ((qualifier & 0x01) == 0x01) {
		qualifierMeaning += ",high priority";
	} else {
		qualifierMeaning += ",normal priority";
	}

	return qualifierMeaning;
}
function getProCmdTypeAndQualifier(cmdType, cmdQualifier) {
	var meaning;
	var qualifierMeaning = "RFU";
	var qualifier;
	switch (cmdType) {
		case "01":
			meaning = "REFRESH";
			qualifierMeaning = getRefreshCmdQualifier(cmdQualifier);
			break;
		case "02":
			meaning = "MORE TIME";
			break;
		case "03":
			meaning = "POLL INTERVAL";
			break;
		case "04":
			meaning = "POLLING OFF";
			break;
		case "05":
			meaning = "SET UP EVENT LIST";
			break;
		case "10":
			meaning = "SET UP CALL";
			qualifierMeaning = getSetUpCallCmdQualifier(cmdQualifier);
			break;
		case "11":
			meaning = "SEND SS";
			break;
		case "12":
			meaning = "SEND USSD";
			break;
		case "13":
			meaning = "SEND SHORT MESSAGE";
			if (cmdQualifier == "00") {
				qualifierMeaning = "packing not required";
			} else if (cmdQualifier == "01") {
				qualifierMeaning = "SMS packing by the terminal required";
			}
			break;
		case "14":
			meaning = "SEND DTMF";
			break;
		case "15":
			meaning = "LAUNCH BROWSER";
			if (cmdQualifier == "00") {
				qualifierMeaning = "launch browser if not already launched";
			} else if (cmdQualifier == "01" || cmdQualifier == "04") {
				qualifierMeaning = "not used";
			} else if (cmdQualifier == "02") {
				qualifierMeaning = "use the existing browser (the browser shall not use the active existing secured session)";
			} else if (cmdQualifier == "03") {
				qualifierMeaning = "close the existing browser session and launch new browser session";
			}
			break;
		case "16":
			meaning = "GEOGRAPHICAL LOCATION REQUEST";
			break;
		case "20":
			meaning = "PLAY TONE";
			if (cmdQualifier == "00") {
				qualifierMeaning = "use of vibrate alert is up to the terminal";
			} else if (cmdQualifier == "01") {
				qualifierMeaning = "vibrate alert, if available, with the tone";
			}
			break;
		case "21":
			meaning = "DISPLAY TEXT";
			qualifierMeaning = getDisplayQualifier(cmdQualifier);
			break;
		case "22":
			meaning = "GET INKEY";
			qualifierMeaning = getInputOrInkeyQualifier(cmdType, cmdQualifier);
			break;
		case "23":
			meaning = "GET INPUT";
			qualifierMeaning = getInputOrInkeyQualifier(cmdType, cmdQualifier);
			break;
		case "24":
			meaning = "SELECT ITEM";
			qualifierMeaning = getSelectItemQualifier(cmdQualifier);
			break;
		case "25":
			meaning = "SET UP MENU";
			qualifier = parseInt("0x" + cmdQualifier);
			if ((qualifier & 0x80) == 0x80) {
				qualifierMeaning = "help information available";
			} else {
				qualifierMeaning = "no help information available";
			}

			if ((qualifier & 0x01) == 0x01) {
				qualifierMeaning += ", selection using soft key preferred";
			} else {
				qualifierMeaning += ", no selection preference";
			}
			break;
		case "26":
			meaning = "PROVIDE LOCAL INFORMATION";
			qualifierMeaning = getProvideLocalInfoQualifier(cmdQualifier);
			break;
		case "27":
			meaning = "TIMER MANAGEMENT";
			qualifier = parseInt("0x" + cmdQualifier);
			if ((qualifier & 0x03) == 0x00) {
				qualifierMeaning = "start";
			} else if ((qualifier & 0x03) == 0x02) {
				qualifierMeaning = "deactivate";
			} else if ((qualifier & 0x03) == 0x01) {
				qualifierMeaning = "get current value";
			} 

			break;
		case "28":
			meaning = "SET UP IDLE MODE TEXT";
			break;
		case "30":
			meaning = "PERFORM CARD APDU";
			break;
		case "31":
			meaning = "POWER ON CARD";
			break;
		case "32":
			meaning = "POWER OFF CARD";
			break;
		case "33":
			meaning = "GET READER STATUS";
			if (cmdQualifier == "00") {
				qualifierMeaning = "Card reader status";
			} else if (cmdQualifier == "01") {
				qualifierMeaning = "Card reader identifier";
			} else {
				qualifierMeaning = "Reserved";
			}
			break;
		case "34":
			meaning = "RUN AT COMMAND";
			break;
		case "35":
			meaning = "LANGUAGE NOTIFICATION";
			if (cmdQualifier == "00") {
				qualifierMeaning = "non-specific language notification";
			} else if (cmdQualifier == "01") {
				qualifierMeaning = "specific language notification";
			}
			break;
		case "40":
			meaning = "OPEN CHANNEL";
			qualifier = parseInt("0x" + cmdQualifier);
			if ((qualifier & 0x01) == 0x01) {
				qualifierMeaning = "immediate link establishment";
			} else {
				qualifierMeaning = "on demand link establishment";
			}

			if ((qualifier & 0x02) == 0x02) {
				qualifierMeaning = "automatic reconnection";
			} else {
				qualifierMeaning = "no automatic reconnection";
			}

			if ((qualifier & 0x04) == 0x04) {
				qualifierMeaning = "immediate link establishment in background mode (bit 1 is ignored)";
			} else {
				qualifierMeaning = "no background mode";
			}

			if ((qualifier & 0x08) == 0x08) {
				qualifierMeaning = " DNS server address(es) requested";
			} else {
				qualifierMeaning = "no DNS server address(es) requested";
			}
			break;
		case "41":
			meaning = "CLOSE CHANNEL";
			qualifier = parseInt("0x" + cmdQualifier);
			if ((qualifier & 0x01) == 0x01) {
				qualifierMeaning = "indication to terminal that next CAT command will be OPEN CHANNEL using same Network Access Name and Bearer Description as channel to be closed";
			} else {
				qualifierMeaning = "no indication";
			}
			break;
		case "42":
			meaning = "RECEIVE DATA";
			break;
		case "43":
			meaning = "SEND DATA";
			qualifier = parseInt("0x" + cmdQualifier);
			if ((qualifier & 0x01) == 0x01) {
				qualifierMeaning = "send data immediately";
			} else {
				qualifierMeaning = "store data in Tx buffer";
			}
			break;
		case "44":
			meaning = "GET CHANNEL STATUS";
			break;
		case "45":
			meaning = "SERVICE SEARCH";
			break;
		case "46":
			meaning = "GET SERVICE INFORMATION";
			break;
		case "47":
			meaning = "DECLARE SERVICE";
			qualifier = parseInt("0x" + cmdQualifier);
			if ((qualifier & 0x01) == 0x01) {
				qualifierMeaning = "delete a service from the terminal service database";
			} else {
				qualifierMeaning = "add a new service to the terminal service database";
			}
			break;
		case "50":
			meaning = "SET FRAMES";
			qualifier = parseInt("0x" + cmdQualifier);
			if ((qualifier & 0x01) == 0x01) {
				qualifierMeaning = "This value tells the terminal not to draw a separator between every adjoining frame";
			} else {
				qualifierMeaning = "This value tells the terminal to draw a separator between every adjoining frame";
			}
			break;
		case "51":
			meaning = "GET FRAMES STATUS";
			break;
		case "60":
			meaning = "RETRIEVE MULTIMEDIA MESSAGE";
			break;
		case "61":
			meaning = "SUBMIT MULTIMEDIA MESSAGE";
			break;
		case "62":
			meaning = "DISPLAY MULTIMEDIA MESSAGE";
			qualifier = parseInt("0x" + cmdQualifier);
			ualifierMeaning = getDisplayQualifier(cmdQualifier);
			break;
		case "70":
			meaning = "ACTIVATE";
			break;
		case "71":
			meaning = "CONTACTLESS STATE CHANGED";
			break;
		case "72":
			meaning = "COMMAND CONTAINER";
			break;
		case "73":
			meaning = "ENCAPSULATED SESSION CONTROL";
			if (cmdQualifier == "00") {
				qualifierMeaning = "end encapsulated command session";
			} else if (cmdQualifier == "01") {
				qualifierMeaning = "request Master SA setup";
			} else if (cmdQualifier == "02") {
				qualifierMeaning = "request Connection SA setup";
			} else if (cmdQualifier == "03") {
				qualifierMeaning = "request Secure Channel Start";
			} else if (cmdQualifier == "04") {
				qualifierMeaning = "close Master and Connection SA, keep encapsulated command session";
			}
			break;
		case "81":
			meaning = "End of the proactive UICC session";
			break;

		default:
			meaning = "Reserved for proprietary use";
			break;
	}

	return cmdType + "[Cmd Type:" + meaning + "]" + cmdQualifier + "[Cmd Qualifier:" + qualifierMeaning + "]";
}

/*
   analyze Result [ETSI_102223_8.12]

   Result tag ('03' or '83')
   Length
      General result 						1
      Additional information on result      
*/
function analyzeResultTLV(lcData, offset, len) {
   var displayData = "";
   var result = lcData.substr(offset, 2);
   var meaning;

   switch (result) {
   		case "00":
   			meaning = "Command performed successfully";
   			break;
		case "01":
   			meaning = "Command performed with partial comprehension";
   			break;
		case "02":
   			meaning = "Command performed, with missing information";
   			break;
		case "03":
   			meaning = "REFRESH performed with additional EFs read";
   			break;
		case "04":
   			meaning = "Command performed successfully, but requested icon could not be displayed";
   			break;
		case "05":
   			meaning = "Command performed, but modified by call control by NAA";
   			break;
		case "06":
   			meaning = "Command performed successfully, limited service";
   			break;
		case "07":
   			meaning = "Command performed with modification";
   			break;
		case "08":
   			meaning = "REFRESH performed but indicated NAA was not active";
   			break;
		case "09":
   			meaning = "Command performed successfully, tone not played";
   			break;
		case "10":
   			meaning = "Proactive UICC session terminated by the user";
   			break;
		case "11":
   			meaning = "Backward move in the proactive UICC session requested by the user";
   			break;
		case "12":
   			meaning = "No response from user";
   			break;
		case "13":
   			meaning = "Help information required by the user";
   			break;
		case "14":
   			meaning = "USSD or SS transaction terminated by the user";
   			break;
		case "20":
   			meaning = "terminal currently unable to process command";
   			break;
		case "21":
   			meaning = "Network currently unable to process command";
   			break;
		case "22":
   			meaning = "User did not accept the proactive command";
   			break;
		case "23":
   			meaning = "User cleared down call before connection or network release";
   			break;
		case "24":
   			meaning = "Action in contradiction with the current timer state";
   			break;
		case "25":
   			meaning = "Interaction with call control by NAA, temporary problem";
   			break;
		case "26":
   			meaning = "Launch browser generic error";
   			break;
		case "27":
   			meaning = "MMS temporary problem";
   			break;
		case "30":
   			meaning = "Command beyond terminal's capabilities";
   			break;
		case "31":
   			meaning = "Command type not understood by terminal";
   			break;
		case "32":
   			meaning = "Command data not understood by terminal";
   			break;
		case "33":
   			meaning = "Command number not known by terminal";
   			break;
		case "34":
   			meaning = "SS Return Error";
   			break;
		case "35":
   			meaning = "SMS RP-ERROR";
   			break;
		case "37":
   			meaning = "USSD Return Error";
   			break;
		case "39":
   			meaning = "Interaction with call control by USIM or MO short message control by USIM, permanent problem";
   			break;

		default:
			meaning = "No Meaning";
			break;
   }
   displayData = result + "[General result:" + meaning + "]";

   if (len > 2) {
   		displayData += lcData.substr(offset + 2, 2 * len - 2) + "[Additional information on result]";
   }

   return displayData;
}

/*
	 Duration tag
		Length = '02' 1
		Time unit 	  1
		Time interval 1
*/
function analyzeDurationTLV(lcData, offset, len) {
	var displayData = "";

	if (len != 2)
	{
		return lcData.substr(offset, 2 * len);
	}

	var timeUnit = lcData.substr(offset, 2);
	var timeInterval = lcData.substr(offset + 2, 2);

	switch (timeUnit) {
		case "00":
   			meaning = "minutes";
   			break;
		case "01":
   			meaning = "seconds";
   			break;
		case "02":
   			meaning = "tenths of seconds";
   			break;
		default:
			meaning = "reserved";
			break; 
	}

	displayData = timeUnit + "[Time unit:" + meaning + "]";
	displayData += timeInterval + "[Time interval]";

	return displayData;
}

/*
	Alpha identifier tag
		Length
		Alpha identifier
*/
function analyzeAlphaIdTLV(lcData, offset, len) {
	return lcData.substr(offset, 2 * len);
}

/*
   SS string tag
	Length
		TON and NPI 		1
		SS or USSD string
*/
function analyzeSSTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[TON and NPI]";
	displayData += lcData.substr(offset + 2, len * 2 - 2) + "[SS or USSD string]";
    return displayData;
}
/*
   Text string tag
		Length (X)
		Data coding scheme
		Text string
*/
function analyzeTextStringTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Data coding scheme]";
	displayData += lcData.substr(offset + 2, len * 2 - 2) + "[Text string]";
    return displayData;
}
/*
   USSD string tag 1
	Length
		Data coding scheme 1
		USSD string
*/
function analyzeUSSDStringTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Data coding scheme]";
	displayData += lcData.substr(offset + 2, len * 2 - 2) + "[USSD string]";
    return displayData;
}
/*
	Tone tag 1
		Length = '01' 1
		Tone
*/
function analyzeToneTLV(lcData, offset, len) {
	var displayData = "";
	var meaning;
	var tone = lcData.substr(offset, 2);
	switch (tone) {
		case "01":
   			meaning = "Dial tone";
   			break;
		case "02":
   			meaning = "Called subscriber busy";
   			break;
		case "03":
   			meaning = "Congestion";
   			break;
		case "04":
   			meaning = "Radio path acknowledge";
   			break;
		case "05":
   			meaning = "Radio path not available/Call dropped";
   			break;
		case "06":
   			meaning = "Error/Special information";
   			break;
		case "07":
   			meaning = "Call waiting tone";
   			break;
		case "08":
   			meaning = "Ringing tone";
   			break;
		case "10":
   			meaning = "General beep";
   			break;
		case "11":
   			meaning = "Positive acknowledgement tone";
   			break;
		case "12":
   			meaning = "Negative acknowledgement or error tone";
   			break;
		case "13":
   			meaning = "Ringing tone as selected by the user for incoming speech call";
   			break;
		case "14":
   			meaning = "Alert tone as selected by the user for incoming SMS";
   			break;
		case "15":
   			meaning = "Critical Alert";
   			break;
		case "20":
   			meaning = "vibrate only";
   			break;
		case "30":
   			meaning = "happy tone";
   			break;
		case "31":
   			meaning = "sad tone";
   			break;
		case "32":
   			meaning = "urgent action tone";
   			break;
		case "33":
   			meaning = "question tone";
   			break;
		case "34":
   			meaning = "message received tone";
   			break;
		case "40":
   			meaning = "Melody 1";
   			break;
		case "41":
   			meaning = "Melody 2";
   			break;
		case "42":
   			meaning = "Melody 3";
   			break;
		case "43":
   			meaning = "Melody 4";
   			break;
		case "44":
   			meaning = "Melody 5";
   			break;
		case "45":
   			meaning = "Melody 6";
   			break;
		case "46":
   			meaning = "Melody 7";
   			break;
		case "47":
   			meaning = "Melody 8";
   			break;
		default:
			meaning = "reserved";
			break; 
	}

	displayData = tone + "[Tone:" + meaning + "]";
    return displayData;
}
/*
   Item tag 1
		Length (X) Y
		Identifier of item 1
		Text string of item

	Item identifier tag 1
		Length = '01' 	1
		Identifier of item chosen
*/
function analyzeItemTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Identifier of item]";
	if (len > 2) {
		displayData += lcData.substr(offset + 2, len * 2 - 2) + "[Text string of item]";
	}
    return displayData;
}
/*
   Response length tag 			1
	Length = '02' 				1
	Minimum length of response  1
	Maximum length of response  1
*/
function analyzeRespLenTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Minimum length of response]";
	displayData += lcData.substr(offset + 2, 2) + "[Maximum length of response]";
    return displayData;
}
/*
   File List tag 1
		Length (X) of bytes following
		Number of files (n) 1
		Files
*/
function analyzeFileListTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Number of files]";
	if (len > 2) {
		displayData += lcData.substr(offset + 2, len * 2 - 2) + "[Files]";
	}
    return displayData;
}
/*
	Event list tag 1
		Length (X)
		Event list
*/
function analyzeEventListTLV(lcData, offset, len) {
	var displayData = "";
	var event;
	var meaning;
    len = len * 2 + offset;
	while (offset < len) {
		event = lcData.substr(offset, 2);
		switch (event) {
			case "00":
				meaning = "MT call";
				break;
			case "01":
				meaning = "Call connected";
				break;
			case "02":
				meaning = "Call disconnected";
				break;
			case "03":
				meaning = "Location status";
				break;
			case "04":
				meaning = "User activity";
				break;
			case "05":
				meaning = "Idle screen available";
				break;
			case "06":
				meaning = "Card reader status";
				break;
			case "07":
				meaning = "Language selection";
				break;
			case "08":
				meaning = "Browser termination";
				break;
			case "09":
				meaning = "Data available";
				break;
			case "0A":
				meaning = "Channel status";
				break;
			case "0B":
				meaning = "Access Technology Change (single access technology)";
				break;
			case "0C":
				meaning = "Display parameters changed";
				break;
			case "0D":
				meaning = "Local connection";
				break;
			case "0E":
				meaning = "Network Search Mode Change";
				break;
			case "0F":
				meaning = "Browsing status";
				break;
			case "10":
				meaning = "Frames Information Change";
				break;
			case "11":
				meaning = "I-WLAN Access Status";
				break;
			case "12":
				meaning = "Network Rejection";
				break;
			case "13":
				meaning = "HCI connectivity event";
				break;
			case "14":
				meaning = "Access Technology Change (multiple access technologies)";
				break;
			case "15":
				meaning = "CSG cell selection";
				break;
			case "16":
				meaning = "Contactless state request";
				break;
			case "17":
				meaning = "IMS Registration";
				break;
			case "18":
				meaning = "IMS Incoming data";
				break;
			case "19":
				meaning = "Profile Container";
				break;
			case "1A":
				meaning = "Void";
				break;
			case "1B":
				meaning = "Secured Profile Container";
			case "1C":
				meaning = "Poll Interval Negotiation";
			default:
				meaning = "No Meaning";
				break;
		}

		displayData += event + "[" + meaning + "]";
		offset += 2;
	}
    
	return displayData;
}
/*
   Location status tag 1
		Length (X) of bytes following 1
		Location status
*/
function analyzeLocalStatusTLV(lcData, offset, len) {
	var displayData = "";
	displayData = lcData.substr(offset, 2);
	
	switch (displayData) {
		case "00":
			displayData += "[Normal service]";
			break;
		case "01":
			displayData += "[Limited service]";
			break;
		case "02":
			displayData += "[No service]";
			break;
		default:
			break;
	}

    return displayData;
}
/*
   Icon identifier tag  1
	Length = '02' 		1
	Icon qualifier 		1
	Icon identifier
*/
function analyzeIconIdTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Icon qualifier]";
	displayData += lcData.substr(offset + 2, 2) + "[Icon identifier ]";
    return displayData;
}
/*
   Items Icon identifier tag 1
	Length (X)			1
	Icon list qualifier 1
	Icon identifier list
*/
function analyzeItemIconTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Icon list qualifier]";
	if (len > 2) {
		displayData += lcData.substr(offset + 2, len * 2 - 2) + "[Icon identifier list]";
	}
    return displayData;
}
/*
   Card reader status tag 1
	Length 				  1
	Card reader status    1
*/
function analyzeCardReaderTLV(lcData, offset, len) {
	var displayData = "";
	var cardReaderStatus = lcData.substr(offset, 2);
	var cardReaderStatusHex = cardReaderStatus.parseInt("0x" + cardReaderStatus);
	displayData += cardReaderStatus + "[";
	if ((cardReaderStatusHex & 0x80) == 0x80)
	{
		displayData += "Card in reader is powered";
	} else {
		displayData += "No card powered";
	}
	displayData += ",";
	if ((cardReaderStatusHex & 0x40) == 0x40)
	{
		displayData += "Card is present in reader";
	} else {
		displayData += "No card present";
	}
	displayData += ",";
	if ((cardReaderStatusHex & 0x20) == 0x20)
	{
		displayData += "Card reader present is ID-1 size";
	} else {
		displayData += "Card reader present is not ID-1 size";
	}
	displayData += ",";
	if ((cardReaderStatusHex & 0x10) == 0x10)
	{
		displayData += "Card reader is present";
	} else {
		displayData += "Card reader is not present";
	}
	displayData += ",";
	if ((cardReaderStatusHex & 0x08) == 0x08)
	{
		displayData += "Card reader is removable";
	} else {
		displayData += "Card reader is not removable";
	}
	displayData += ", Identity of the additional card reader:" + (cardReaderStatusHex & 0x07);
	displayData += "]";
    return displayData;
}
/*
   Timer identifier tag  1
		Length='01' 	 1
		Timer identifier 
*/
function analyzeTimerIdTLV(lcData, offset, len) {
	var displayData = "";
	var timer = lcData.substr(offset, 2);
	if (timer <= 8) {
		displayData += timer + "[Timer " + parseInt("0x" + timer) + "]";
	} else {
		displayData += timer + "[reserved]";
	}
	
    return displayData;
}
/*
   Timer value tag  1
	 Length='03' 	1
	 Timer value    3
*/
function analyzeTimerValueTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[hour]";
	displayData += lcData.substr(offset + 2, 2) + "[minute]";
	displayData += lcData.substr(offset + 4, 2) + "[second]";
    return displayData;
}
/*
	Date-Time and Time zone tag  1
		Length = '07' 			 1
		Date-Time and Time zone  7
*/
function analyzeDataTimeTLV(lcData, offset, len) {
	var displayData = "";
	displayData += lcData.substr(offset, 2) + "[Year]";
	displayData += lcData.substr(offset + 2, 2) + "[Month]";
	displayData += lcData.substr(offset + 4, 2) + "[Day]";
	displayData += lcData.substr(offset + 6, 2) + "[Hour]";
	displayData += lcData.substr(offset + 8, 2) + "[Minute]";
	displayData += lcData.substr(offset + 10, 2) + "[Second]";
	displayData += lcData.substr(offset + 12, 2) + "[Time Zone]";
    return displayData;
}
/*
	Timing Advance tag  1
		Length = '02' 	1
		ME Status 		1
		Timing Advance  1
*/
function analyzeTimingAdvanceTLV(lcData, offset, len) {
	var displayData = "";
	var meStatus = lcData.substr(offset, 2);
	var timingAdvance = lcData.substr(offset + 2, 2);

	displayData += meStatus + "[ME Status:";
	if (meStatus == "00") {
		displayData += "ME is in the idle state";
	} else if (meStatus == "01") {
		displayData += "ME is not in idle state";
	} else {
		displayData += "reserved values";
	}
	displayData += "]";
	displayData += timingAdvance + "[Timing Advance]";
    return displayData;
}
/*
	Browser identity tag 1
		Length 			 1
		Browser Identity 1
*/
function analyzeBrowserIdTLV(lcData, offset, len) {
	var displayData = "";
	var browserId = lcData.substr(offset, 2);

	displayData += browserId + "[Browser Identity:";
	if (browserId == "00") {
		displayData += "Default Browser shall be used";
	} else if (browserId == "01") {
		displayData += "WML Browser shall be used";
	} else if (browserId == "02") {
		displayData += "HTML Browser shall be used";
	} else if (browserId == "03") {
		displayData += "XHTML Browser shall be used";
	} else if (browserId == "04") {
		displayData += "CHTML Browser shall be used";
	} else {
		displayData += "RFU";
	}
	displayData += "]";
    return displayData;
}
/*
	Bearer tag 		1
		Length (X)  Y
		List of bearers in order of priority requested   x
*/
function analyzeBearerTLV(lcData, offset, len) {
	var displayData = "";
	var bearer;
	var meaning;
    len = len * 2 + offset;
	while (offset < len) {
		bearer = lcData.substr(offset, 2);
		switch (bearer) {
			case "00":
				meaning = "short message";
				break;
			case "01":
				meaning = "circuit switched data";
				break;
			case "02":
				meaning = "USSD";
				break;
			case "03":
				meaning = "GPRS/UTRAN packet service/E-UTRAN";
				break;
			default:
				meaning = "RFU";
				break;
		}

		displayData += bearer + "[" + meaning + "]";
		offset += 2;
	}
    
	return displayData;
}
/*
	Browser Termination Cause tag 	1
		Length (1) 					1
		Browser Termination Cause   1
*/
function analyzeBrowserTerminationTLV(lcData, offset, len) {
	var displayData = "";
	var cause = lcData.substr(offset, 2);

	displayData += cause + "[Browser Termination Cause:";
	if (cause == "00") {
		displayData += "User Termination";
	} else if (cause == "01") {
		displayData += "Error Termination";
	} 
	displayData += "]";
    return displayData;
}
/*
	Bearer description tag   1
		Length (X+1)         1
		Bearer type          1
		Bearer parameters    X
*/
function analyzeBearerDescriptTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Bearer type:";
	switch (type) {
		case "01":
			meaning = "CSD";
			break;
		case "02":
			meaning = "GPRS / UTRAN packet service / E-UTRAN";
			break;
		case "03":
			meaning = "default bearer for requested transport layer";
			break;
		case "04":
			meaning = "local link technology independent";
			break;
		case "05":
			meaning = "Bluetooth";
			break;
		case "06":
			meaning = "IrDA";
			break;
		case "07":
			meaning = "RS232";
			break;
		case "08":
			meaning = "cdma2000 packet data service";
			break;
		case "09":
			meaning = "UTRAN packet service with extended parameters / HSDPA / E-UTRAN";
			break;
		case "0A":
			meaning = "I-WLAN";
			break;
		case "0B":
			meaning = "E-UTRAN/Mapped UTRAN packet service";
			break;
		case "1B":
			meaning = "USB";
			break;
		default:
			meaning = "reserved";
			break;
	}
	displayData += "]";

	displayData += lcData.substr(offset + 2, 2 * len - 2) + "[Bearer parameters]";
    return displayData;
}
/*
	Channel status tag 	1
		Length (2) 		1
		Channel status  2
*/
function analyzeChannelStatusTLV(lcData, offset, len) {
	var displayData = "";
	var cardReaderStatus = lcData.substr(offset, 2);
	var cardReaderStatusHex = parseInt("0x" + cardReaderStatus);
	displayData += cardReaderStatus + "[";
	if ((cardReaderStatusHex & 0x80) == 0x80)
	{
		displayData += "Link established or Packet data service activated";
	} else {
		displayData += "Link not established or Packet data service not activated";
	}
	displayData += ",";
	if ((cardReaderStatusHex & 0x07) == 0x00) {
		displayData += "No channel available";
	} else {
		displayData += "Channel identifier:" + (cardReaderStatusHex & 0x07);
	}
	displayData += "]";

	cardReaderStatus = lcData.substr(offset + 2, 2);
	displayData += cardReaderStatus + "[";
	if (cardReaderStatus == "00") {
		displayData += "No further info can be given";
	} else if (cardReaderStatus == "01" || cardReaderStatus == "02" || cardReaderStatus == "03" || cardReaderStatus == "04") {
		displayData += "Not used";
	} else if (cardReaderStatus == "05") {
		displayData += "Link dropped (network failure or user cancellation)";
	} else {
		displayData += "reserved";
	}
	displayData += "]";

    return displayData;
}
/*
	UICC/terminal interface transport level tag 1
		Length = "03" 			1
		Transport protocol type 1
		Port number             2
*/
function analyzeTerminalLevelTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Transport protocol type:";
	if (type == "01") {
		displayData += "UDP, UICC in client mode, remote connection";
	} else if (type == "02") {
		displayData += "TCP, UICC in client mode, remote connection";
	} else if (type == "03") {
		displayData += "TCP, UICC in server mode";
	} else if (type == "04") {
		displayData += "UDP, UICC in client mode, local connection";
	} else if (type == "05") {
		displayData += "TCP, UICC in client mode, local connection";
	} else if (type == "06") {
		displayData += "direct communication channel";
	} else {
		displayData += "reserved";
	}
	displayData += "]";

	type = lcData.substr(offset + 2, 4);
	displayData += type + "[Port number]";
    return displayData;
}
/*
	Other address tag 	1
		Length (X) 		1
		Type of address 1
		Address  		X-1
*/
function analyzeOtherAddressTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Type of address:";
	if (type == "21") {
		displayData += "Ipv4 address";
	} else if (type == "57") {
		displayData += "Ipv6 address";
	} else {
		displayData += "reserved";
	}
	displayData += "]";

	type = lcData.substr(offset + 2, 2 * len - 2);
	displayData += type + "[Address]";
    return displayData;
}
/*
	Access Technology tag 	1
		Length (X) of bytes following 1
		Technology 1 		1
		Technology 2 		1
		... ... ...
		Technology n 		1
*/
function analyzeAccessTechTLV(lcData, offset, len) {
	var displayData = "";
	var technology;
	var meaning;
    len = len * 2 + offset;
	while (offset < len) {
		technology = lcData.substr(offset, 2);
		switch (technology) {
			case "00":
				meaning = "GSM";
				break;
			case "01":
				meaning = "TIA/EIA-553";
				break;
			case "02":
				meaning = "TIA/EIA-136-C";
				break;
			case "03":
				meaning = "UTRAN";
				break;
			case "04":
				meaning = "TETRA";
				break;
			case "05":
				meaning = "TIA/EIA-95-B";
				break;
			case "06":
				meaning = "cdma2000 1x";
				break;
			case "07":
				meaning = "cdma2000 HRPD";
				break;
			case "08":
				meaning = "E-UTRAN";
				break;
			case "09":
				meaning = "eHRPD";
				break;
			default:
				meaning = "RFU";
				break;
		}

		displayData += technology + "[" + meaning + "]";
		offset += 2;
	}
    
	return displayData;
}
/*
	Service Record tag  	1
		Length (X+2) 		Y
		Local Bearer technology identifier 1
		Service Identifier  1
		Service Record      X

	Device Filter tag                         1
		Length (1+X1+X2+…+Xn)                 Y
		Local Bearer technology identifier    1
		Device Filter                         X

	Service Search tag 1
		Length (X+1) Y
		Local Bearer technology identifier 1
		Service Search                     X

	Attribute Information tag 1
		Length (X+1) Y
		Local Bearer technology identifier 1
		Attribute Information              X
*/
function analyzeServiceRecordTLV(lcData, offset, len, tag) {
	var displayData = "";
	var type = lcData.substr(offset, 2);
	var dataLen = 0;

	displayData += type + "[Local Bearer technology identifier:";
	if (type == "00") {
		displayData += "Technology independent";
	} else if (type == "01") {
		displayData += "Bluetooth";
	} else if (type == "02") {
		displayData += "IrDA";
	} else if (type == "03") {
		displayData += "RS232";
	} else if (type == "04") {
		displayData += "USB";
	} else {
		displayData += "RFU";
	}
	displayData += "]";

	if (tag == CAT_DATA_TAG_SERVICE_RECORD_41) {
		offset += 2;
		dataLen += 2;
		type = lcData.substr(offset, 2);
		displayData += type + "[Service Identifier]";
	}
	
	offset += 2;
	dataLen += 2;
	type = lcData.substr(offset, 2 * len - dataLen);
	if (tag == CAT_DATA_TAG_SERVICE_RECORD_41) {
		displayData += type + "[Service Record]";
	} else if (tag == CAT_DATA_TAG_DEVICE_FILTER_42) {
		displayData += type + "[Device Filter]";
	} else if (tag == CAT_DATA_TAG_SERVICE_SEARCH_43) {
		displayData += type + "[Service Search]";
	} else if (tag == CAT_DATA_TAG_SERVICE_SEARCH_43) {
		displayData += type + "[Attribute Information]";
	}

    return displayData;
}
/*
	Remote Entity Address tag   1
		Length (X+1)            Y
		Coding Type 			1
		Remote Entity address   X
*/
function analyzeRemoteEntityAddrTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Coding Type:";
	if (type == "00") {
		displayData += "IEEE 802.16 [46] 48-bit address";
	} else if (type == "01") {
		displayData += "32 bits IrDA device address";
	} else {
		displayData += "reserved";
	}
	displayData += "]";

	type = lcData.substr(offset + 2, 2 * len - 2);
	displayData += type + "[Remote Entity address]";
    return displayData;
}

/*
	(I-)WLAN Access Status tag  1
			Length (1) 	 		1
			Access status       1
*/
function analyzeWlanAccessStatusTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Access status:";
	if (type == "00") {
		displayData += "No current (I-)WLAN coverage";
	} else if (type == "01") {
		displayData += "(I-)WLAN coverage available, no current connection";
	} else if (type == "02") {
		displayData += "(I-)WLAN coverage available, connection on-going";
	} else {
		displayData += "reserved";
	}
	displayData += "]";
    return displayData;
}
/*
	Tag for contactless state request   1
		Length 						    1
		Contactless state request data 	1
*/
function analyzeContactlessRequestTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Contactless state request data:";
	if (type == "00") {
		displayData += "Enable contactless";
	} else if (type == "01") {
		displayData += "Disable contactless";
	} else if (type == "02") {
		displayData += "Get contactless state";
	}
	displayData += "]";
    return displayData;
}
/*
	Tag for contactless functionality state  1
		Length 								 1
		Contactless functionality state data 1
*/
function analyzeContactlessFuncTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Contactless functionality state data:";
	if (type == "00") {
		displayData += "Enable";
	} else if (type == "01") {
		displayData += "Disabled";
	} 
	displayData += "]";
    return displayData;
}
/*
	Battery State tag  1
		Length = '01'  1
		Battery States 1
*/
function analyzeBatteryStateTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Battery State:";
	if (type == "00") {
		displayData += "battery very low";
	} else if (type == "01") {
		displayData += "battery low";
	} else if (type == "02") {
		displayData += "battery average";
	} else if (type == "03") {
		displayData += "battery good";
	} else if (type == "04") {
		displayData += "battery full";
	} else if (type == "FE") {
		displayData += "Status not applicable";
	} else if (type == "FF") {
		displayData += "Status Unknown";
	}  else {
		displayData += "RFU";
	}
	displayData += "]";
    return displayData;
}
/*
	Network search mode tag 1
		Length 				1
		Network search mode 1
*/
function analyzeNetSearchModeTLV(lcData, offset, len) {
	var displayData = "";
	var type = lcData.substr(offset, 2);

	displayData += type + "[Network search mode:";
	if (type == "00") {
		displayData += "Manual";
	} else if (type == "01") {
		displayData += "Automatic";
	} else {
		displayData += "RFU";
	}
	displayData += "]";
    return displayData;
}
/*
	Routing Area Information Tag 1
		Length 					 1
		Mobile Country & Network Codes (MCC & MNC) 3
		Location Area Code (LAC) 2
		Routing Area code (RAC)	 1
*/
function analyzeRoutingAreaInfoTLV(lcData, offset, len) {
	var displayData = "";
	var data = lcData.substr(offset, 3 * 2);
	displayData += data + "[Mobile Country & Network Codes]";
	offset += 3 * 2;

	data = lcData.substr(offset, 2 * 2);
	displayData += data + "[Location Area Code]";
	offset += 2 * 2;

	data = lcData.substr(offset, 2);
	displayData += data + "[Routing Area code]";
    return displayData;
}


// Analyze TLV Data for Envelope/Proactive Command 
function analyzeEnvOrProTlvData(lcData, lc) {
    var displayData = "";
    var offset = 0;

	while (offset < lc * 2) {
		var lenInfo = getBerTLVLenInfo(lcData.substr(offset + 2));
		var tagByteNum = lenInfo[0];
		var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		var tag = lcData.substr(offset, 2);
		tag = ignoreBit8ForTag(tag); // ignore bit8
		// tag meaning
		displayData += TAB + lcData.substr(offset, 2) + " " + lcData.substr(offset + 2, tagByteNum * 2) + " [" + CAT_TAG_MEANING[parseInt("0x" + tag)] + "] <br>";
		displayData += TAB2;
		switch (tag) {
			case CAT_DATA_TAG_DETAILS_01: // "01"; Command Details
				displayData += analyzeCmdDetailsTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break; 
			case CAT_DATA_TAG_DEV_ID_02: // "02"; Device identity
				displayData += analyzeDeviceIdentitiesTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break; 
			case CAT_DATA_TAG_RESULT_03: // "03";
				displayData += analyzeResultTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break; 
			case CAT_DATA_TAG_DURATION_04: // "04";
				displayData += analyzeDurationTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break; 
			case CAT_DATA_TAG_ALPHA_ID_05: // "05";
				displayData += analyzeAlphaIdTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break; 
			case CAT_DATA_TAG_ADDRESS_06: // "06";
				displayData += analyzeAddressTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break; 
			case CAT_DATA_TAG_CAPABILITY_CFG_07: // "07";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				break; 
			case CAT_DATA_TAG_SUBADDRESS_08: // "08";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				break; 
			case CAT_DATA_TAG_SS_STRING_09: // "09";
				displayData += analyzeSSTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break;  
			case CAT_DATA_TAG_USSD_STRING_0A: // "0A";
				displayData += analyzeUSSDStringTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break; 
			case CAT_DATA_TAG_SMS_TPDU_0B: // "0B";
				 displayData += analyzeSMSTPDUTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break;  
			case CAT_DATA_TAG_CB_PAGE_0C: // "0C";
				 displayData += analyzeCBPageTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_TEXT_STRING_0D: // "0D";
				 displayData += analyzeTextStringTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_TONE_OR_ECAT_PROFILE_0E: // "0E";
				 displayData += analyzeToneTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_ITEM_OR_ECAT_ID_0F : // "0F";
				 displayData += analyzeItemTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_ITEM_ID_OR_ENCAP_ENV_TYPE_10: // "10";
				 displayData += analyzeItemTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_RESP_LEN_OR_CALL_CTRL_RESULT_11: // "11";
				 displayData += analyzeRespLenTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_FILE_LIST_OR_CAT_SERVICE_LIST_12: // "12";
				 displayData += analyzeFileListTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_LOC_INFO_13: // "13";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_IMEI_14: // "14";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_HELP_REQ_15: // "15";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_NETWORK_MEASURE_RESULT_16: // "16";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_DEFAULT_TEXT_17: // "17";
				 displayData += analyzeTextStringTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_ITEMS_NEXT_ACTION_INDICATOR_18_ONLY: // "18";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_EVENT_LIST_19: // "19";
				 displayData += analyzeEventListTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_CAUSE_1A: // "1A";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_LOCATION_STATUS_1B: // "1B";
				 displayData += analyzeLocalStatusTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_TRANSACTION_IDENTIFIE_1C: // "1C";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_BCCH_CHANNEL_LIST_1D: // "1D";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_ICON_IDENTIFIER_1E: // "1E";
				 displayData += analyzeIconIdTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_ITEM_ICON_IDENTIFIER_LIST_1F: // "1F";
				 displayData += analyzeItemIconTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_CARD_READER_STATUS_20: // "20";
				 displayData += analyzeCardReaderTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_CARD_ATR_OR_ECAT_SEQUENCE_NUMBER_21: // "21";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_C_APDU_OR_ENCRYPTED_TLV_LIST_22: // "22";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_R_APDU_OR_SA_TEMPLATE_23: // "23";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);		
				 break; 
			case CAT_DATA_TAG_TIMER_IDENTIFIER_24: // "24";
				 displayData += analyzeTimerIdTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_TIMER_VALUE_25: // "25";
				 displayData += analyzeTimerValueTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_DATE_TIME_AND_TIME_ZONE_26: // "26";
				 displayData += analyzeDataTimeTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_CALL_CONTROL_REQUESTED_ACTION_27 : // "27";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_AT_COMMAND_28: // "28";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_AT_RESPONSE_29: // "29";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_BC_REPEAT_INDICATOR_2A: // "2A";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_IMMEDIATE_RESPONSE_2B: // "2B";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_DTMF_STRING_2C: // "2C";
			     displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_LANGUAGE_2D: // "2D";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_TIMING_ADVANCE_2E: // "2E";
				 displayData += analyzeTimingAdvanceTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_AID_2F: // "2F";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_BROWSER_IDENTITY_30: // "30";
				 displayData += analyzeBrowserIdTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_URL_OR_URI_31: // "31";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);	
				 break; 
			case CAT_DATA_TAG_BEARER_32: // "32";
				 displayData += analyzeBearerTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_PROVISIONING_REFERENCE_FILE_33: // "33";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_BROWSER_TERMINATION_CAUSE_34: // "34";
				 displayData += analyzeBrowserTerminationTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_BEARER_DESCRIPTION_35: // "35";
				 displayData += analyzeBearerDescriptTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break;  
			case CAT_DATA_TAG_CHANNEL_DATA_36: // "36";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_CHANNEL_DATA_LENGTH_37: // "37";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break;  
			case CAT_DATA_TAG_CHANNEL_STATUS_38: // "38";
				 displayData += analyzeChannelStatusTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_BUFFER_SIZE_39: // "39";
  				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_CARD_READER_IDENTIFIER_OR_REFRESH_ENFORCEMENT_POLICY_3A: // "3A";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_FILE_UPDATE_INFORMATION_3B: // "3B";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_UICC_TERMINAL_INTERFACE_TRANSPORT_LEVEL_3C: // "3C";
				 displayData += analyzeTerminalLevelTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_NOT_USED_3D: // "3D";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_OTHER_ADDRESS_DATA_DESTINATION_ADDRESS_3E: // "3E";
				 displayData += analyzeOtherAddressTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_ACCESS_TECHNOLOGY_3F: // "3F";
				 displayData += analyzeAccessTechTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break;  
			case CAT_DATA_TAG_DISPLAY_PARAMETERS_OR_DNS_SERVER_ADDRESS_40: // "40";
			     displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "[Parameters list]";
				 break; 
			case CAT_DATA_TAG_SERVICE_RECORD_41: // "41";
				 displayData += analyzeServiceRecordTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len, CAT_DATA_TAG_SERVICE_RECORD_41);
				 break; 
			case CAT_DATA_TAG_DEVICE_FILTER_42: // "42";
				 displayData += analyzeServiceRecordTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len, CAT_DATA_TAG_DEVICE_FILTER_42);
				 break; 
			case CAT_DATA_TAG_SERVICE_SEARCH_43: // "43";
				 displayData += analyzeServiceRecordTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len, CAT_DATA_TAG_SERVICE_SEARCH_43);
				 break; 
			case CAT_DATA_TAG_ATTRIBUTE_INFORMATION_44: // "44";
				 displayData += analyzeServiceRecordTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len, CAT_DATA_TAG_ATTRIBUTE_INFORMATION_44);
				 break; 
			case CAT_DATA_TAG_SERVICE_AVAILABILITY_45: // "45";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "[Service list]";
				 break; 
			case CAT_DATA_TAG_ESN_46: // "46";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_NETWORK_ACCESS_NAME_47: // "47";
   				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break;  
			case CAT_DATA_TAG_CDMA_SMS_TPDU_48: // "48";
				 displayData += analyzeCDMASmsData(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_REMOTE_ENTITY_ADDRESS_49: // "49";
				 displayData += analyzeRemoteEntityAddrTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_I_WLAN_IDENTIFIER_4A: // "4A";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "[WSID value]";
				 break;  
			case CAT_DATA_TAG_I_WLAN_ACCESS_STATUS_4B: // "4B";
				 displayData += analyzeWlanAccessStatusTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_RFU_4C: // "4C";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_RFU_4D: // "4D";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_RFU_4E: // "4E";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_RFU_4F: // "4F";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_TEXT_ATTRIBUTE_50: // "50";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "[Text Formatting]";
				 break; 
			case CAT_DATA_TAG_ITEM_TEXT_ATTRIBUTE_LIST_51: // "51";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "[Text Attribute list]";
				 break; 
			case CAT_DATA_TAG_PDP_CONTEXT_ACTIVATION_PARAMETER_52: // "52";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_CONTACTLESS_STATE_REQUEST_53: // "53";
				 displayData += analyzeContactlessRequestTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_CONTACTLESS_FUNCTIONALITY_STATE_54: // "54";
				 displayData += analyzeContactlessFuncTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_CSG_CELL_SELECTION_STATUS: // "55";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_CSG_ID_56: // "56";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_HNB_NAME_57: // "57";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_RFU_58: // "58";
			case CAT_DATA_TAG_RFU_59: // "59";
			case CAT_DATA_TAG_RFU_5A: // "5A";
			case CAT_DATA_TAG_RFU_5B: // "5B";
			case CAT_DATA_TAG_RFU_5C: // "5C";
			case CAT_DATA_TAG_RFU_5D: // "5D";
			case CAT_DATA_TAG_RFU_5E: // "5E";
			case CAT_DATA_TAG_RFU_5F: // "5F";
			case CAT_DATA_TAG_MAC_60: // "60";
			case CAT_DATA_TAG_EMERGENCY_CALL_OBJECT_61: // "61";
			case CAT_DATA_TAG_IMEISV_62: // "62";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break;  
			case CAT_DATA_TAG_BATTERY_STATE_63: // "63";
				 displayData += analyzeBatteryStateTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_BROWSING_STATUS_64: // "64";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_NETWORK_SEARCH_MODE_65: // "65";
				 displayData += analyzeNetSearchModeTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 
			case CAT_DATA_TAG_FRAME_LAYOUT_66: // "66";
			case CAT_DATA_TAG_FRAMES_INFORMATION_67: // "67";
			case CAT_DATA_TAG_FRAME_IDENTIFIER_68: // "68";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_UTRAN_E_UTRAN_MEASUREMENT_QUALIFIER_69: // "69";
			case CAT_DATA_TAG_MULTIMEDIA_MESSAGE_REFERENCE_6A: // "6A";
			case CAT_DATA_TAG_MULTIMEDIA_MESSAGE_IDENTIFIER_6B: // "6B";
			case CAT_DATA_TAG_MULTIMEDIA_MESSAGE_TRANSFER_STATUS_6C: // "6C";
			case CAT_DATA_TAG_MEID_6D: // "6D";
			case CAT_DATA_TAG_MULTIMEDIA_MESSAGE_CONTENT_IDENTIFIER_6E: // "6E";
			case CAT_DATA_TAG_MULTIMEDIA_MESSAGE_NOTIFICATION_6F: // "6F";
			case CAT_DATA_TAG_LAST_ENVELOPE_70: // "70";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_REGISTRY_APPLICATION_DATA_71: // "71";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_PLMNWACT_LIST_72 : // "72";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 
			case CAT_DATA_TAG_ROUTING_AREA_INFORMATION_73: // "73";
				 displayData += analyzeRoutingAreaInfoTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				 break; 	
			case CAT_DATA_TAG_UPDATE_ATTACH_TYPE_TAG_74: // "74";
			case CAT_DATA_TAG_REJECTION_CAUSE_CODE_75: // "75";
			case CAT_DATA_TAG_GEOGRAPHICAL_LOCATION_PARAMETERS_OR_IARI_76: // "76";
			case CAT_DATA_TAG_GAD_SHAPES_OR_IMPU_LIST_77: // "77";
			case CAT_DATA_TAG_NMEA_SENTENCE_OR_IMS_STATUS_CODE: // "78";
			case CAT_DATA_TAG_PLMN_LIST_79: // "79";
			case CAT_DATA_TAG_BROADCAST_NETWORK_INFORMATION_7A: // "7A";
			case CAT_DATA_TAG_ACTIVATE_DESCRIPTOR_7B: // "7B";
			case CAT_DATA_TAG_EPS_PDN_CONNECTION_ACTIVATION_PARAMETERS: // "7C";
			case CAT_DATA_TAG_TRACKING_AREA_IDENTIFICATION_7D: // "7D";
			case CAT_DATA_TAG_CSG_ID_LIST_7E: // "7E";
				 displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				 break; 

			default:
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2);
				break;
		}

		displayData += "<br>";

		offset += (1 + tagByteNum + tag_len) * 2;
	}
    
	return displayData;
}

/*
	Structure of ENVELOPE (MENU SELECTION)
	Menu Selection
	Length
		Device identities
		Item identifier
		Help request
	e.g.
	80C2000009D30782020181900101
*/
function analyzeEnvMENU_SEL(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvCALL_CTRL(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvMO_SM_CTRL(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvEVT_DL(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvTIMER_EXP(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvUSSD_DL(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvMMS_TRAN_STATUS(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvMMS_NOTI_DL(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvTERMINAL_APP(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvGEO_LOC_REPORT(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}
function analyzeEnvCONTAINER(lcData, lc) {
   return analyzeEnvOrProTlvData(lcData, lc);
}


/*
send sms:
D0338103011300820281830607919471227200008B1F41000C9194712272080200F612027100000D0AB05000F00000000F0000ABCD
set up menu:
D050810301250082028182850A542D53656C204D656E758F0D0150696C6968204261686173618F09024E535020313231328F0F035472616E736665722050756C73618F0E044C6179616E616E204578747261
*/ 
function analyzeProactiveCmd(apduData, lc) {
	isProactiveCmd = 1;
	var showAnalyseData = analyzeEnvOrProTlvData(apduData, lc);
	isProactiveCmd = 0;
	organizeDisplayDiv("", "Proactive Command", "", "", "", showAnalyseData);
}


function analyzeFileStatusByteC0TLV(lcData, offset, len) {
   var displayData = "";

   if (len != 1) {
   		return lcData.substr(offset, 2 * len);
   }

   var fsb = lcData.substr(offset, 2);
   var fsb_hex = parseInt("0x" + fsb);

   displayData += fsb + "[";
   if ((fsb_hex & 0x80) == 0x80)
   {
		displayData += "High update activity, ";	
   } else {
   		displayData += "Low update activity, ";	
   }
   if ((fsb_hex & 0x40) == 0x40)
   {
		displayData += "Readable and updatable when deactivated";	
   } else {
   		displayData += "Not readable or updatable when deactivated";	
   }
   displayData += "] ";
   return displayData;
}
function analyzeFileProprietaryA5TLV(lcData, offset, len) {
	var displayData = "";
	var space = TAB3;

	len =  offset + len * 2;
	while (offset <len) {
		var lenInfo = getBerTLVLenInfo(lcData.substr(offset + 2));
		var tagByteNum = lenInfo[0];
		var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		var tag = lcData.substr(offset, 2);
		//tag = ignoreBit8ForTag(tag);
		displayData += TAB2 + lcData.substr(offset, 2) + " " + lcData.substr(offset + 2, tagByteNum * 2); 
						
		switch (tag) {
			case BTAG_FCP_FILE_STATUS_BYE_C0:
				displayData += " [Special File Information (File Status Byte)] ";
				displayData += space + analyzeFileStatusByteC0TLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case BTAG_FCP_FILLING_PATTERN_C1:
				displayData += " [Filling Pattern] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_REPEAT_PATTERN_C2:
				displayData += " [Repeat Pattern] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_MAX_FILE_SIZE_86:
				displayData += " [Maximum File Size] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_FILE_DETAILS_84:
				displayData += " [File Details] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			default:
				displayData += " [Self dependent data] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
		}

		offset += (1 + tagByteNum + tag_len) * 2;
	}

	return displayData;
}
// TODO Analyse the details.
function analyzeFileProprietaryA5TLVForResp(lcData, offset, len) {
	var displayData = "";
	var space = "";

	len =  offset + len * 2;
	while (offset <len) {
		var lenInfo = getBerTLVLenInfo(lcData.substr(offset + 2));
		var tagByteNum = lenInfo[0];
		var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		var tag = lcData.substr(offset, 2);
		//tag = ignoreBit8ForTag(tag);
		displayData += TAB2 + lcData.substr(offset, 2) + " " + lcData.substr(offset + 2, tagByteNum * 2); 
	
		switch (tag) {
			case BTAG_FCP_UICC_CHARACTER_80:
				displayData += " [UICC characteristics] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_APP_POWER_81:
				displayData += " [Application power consumption] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_MIN_CLOCK_82:
				displayData += " [Minimum application clock frequency] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_AMOUNT_MEMORY_83:
				displayData += " [Amount of available memory] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_FILE_DETAILS_84:
				displayData += " [File Details] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_FILE_SIZE_85:
				displayData += " [Reserved file size] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_MAX_FILE_SIZE_86:
				displayData += " [Maximum File Size] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_SUPPORT_CMD_87:
				displayData += " [Supported system commands] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_UICC_CONDITIONS_88:
				displayData += " [Specific UICC environmental conditions] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_PLAT_CAT_APDU_89:
				displayData += " [Platform to Platform CAT Secured APDU] ";
				displayData += space + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			default:
				displayData += " [Self dependent data] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
		}

		offset += (1 + tagByteNum + tag_len) * 2;
	}

	return displayData;
}
function analyzeFilePsdo81TLV(lcData, offset, len) {
	var displayData = "";
	var space = (TAB + TAB3);

	len =  offset + len * 2;
	while (offset <len) {
		var lenInfo = getBerTLVLenInfo(lcData.substr(offset + 2));
		var tagByteNum = lenInfo[0];
		var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		var tag = lcData.substr(offset, 2);
		//tag = ignoreBit8ForTag(tag);
		displayData += TAB2 + lcData.substr(offset, 2) + " " + lcData.substr(offset + 2, tagByteNum * 2); 
						
		switch (tag) {
			case BTAG_FCP_PSDO_90:
				displayData += " [PS_DO] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_USAGE_QUALIFIER_DO_95:
				displayData += " [Usage qualifier DO] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_KEY_REF_83:
				displayData += " [Key reference] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_PROPRIETARY_85:
				displayData += " [Proprietary] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			default:
				displayData += " [Self dependent data] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
		}

		offset += (1 + tagByteNum + tag_len) * 2;
	}

	return displayData;
}
function analyzeFileSaTLV(lcData, offset, len) {
	// TODO
	return lcData.substr(offset, 2 * len);
}
function analyzeFileLcsi8ATLV(lcData, offset, len) {
   var displayData = "";

   if (len != 1) {
   		return lcData.substr(offset, 2 * len);
   }

   var lcsi = lcData.substr(offset, 2);
   var lcsi_hex = parseInt("0x" + lcsi);

   displayData += lcsi + "[";
   if (lcsi_hex == 0x00)
   {
		displayData += "No information given";	
   } else  if (lcsi_hex == 0x01) {
   		displayData += "Creation state";	
   } else  if (lcsi_hex == 0x03) {
   		displayData += "Initialization state";	
   } else {
		if ((lcsi_hex & 0xFD) == 0x05)
		{
			displayData += "Operational state - activated";	
		} else if ((lcsi_hex & 0xFD) == 0x04) {
			displayData += "Operational state - deactivated";	
		} else if ((lcsi_hex & 0xFC) == 0x0C) {
			displayData += "Termination state";	
		} else {
			displayData += "Proprietary";	
		}
   }
   displayData += "] ";
   return displayData;
}
function analyzeFileDescriptor82TLV(lcData, offset, len) {
   var displayData = "";

   if (len != 2 && len != 4) {
   		return lcData.substr(offset, 2 * len);
   }

   var fd = lcData.substr(offset, 2);
   var fd_hex = parseInt("0x" + fd);

   displayData += fd + " [";
   if ((fd_hex & 0x40) == 0x40)
   {
		displayData += "Shareable file";	
   } else {
   		displayData += "Not shareable file";	
   }
   if ((fd_hex & 0x3F) == 0x38)
   {
		displayData += ", DF or ADF";	
   }  else if ((fd_hex & 0x3F) == 0x39) {
   		displayData += ", BER-TLV structure";	
   } else {
   		if ((fd_hex & 0x07) == 0x00)
		{
			displayData += ", No information given";	
		} else if ((fd_hex & 0x07) == 0x01) {
			displayData += ", Transparent structure";	
		} else if ((fd_hex & 0x07) == 0x02) {
			displayData += ", Linear fixed structure";	
		} else if ((fd_hex & 0x07) == 0x06) {
			displayData += ", Cyclic structure";	
		}
   }
   displayData += "] ";

   var dcs = lcData.substr(offset + 2, 2);
   displayData += dcs + " [Data Coding Byte] ";

   if (len >= 4) {
	    displayData += lcData.substr(offset + 4, 4) + " [Record Length] ";
		if (len == 5) {
			displayData += lcData.substr(offset + 8, 2) + " [Number of records] ";
		}
   }

   return displayData;
}
// Analyse FCP Template for Create File
function analyzeFcpTemplate(lcData, lc) {
	var displayData = "";
	var offset = 0;

	while (offset < lc * 2) {
		var lenInfo = getBerTLVLenInfo(lcData.substr(offset + 2));
		var tagByteNum = lenInfo[0];
		var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		var tag = lcData.substr(offset, 2);
		//tag = ignoreBit8ForTag(tag);
		displayData += TAB + lcData.substr(offset, 2) + " " + lcData.substr(offset + 2, tagByteNum * 2); 
						
		switch (tag) {
			case BTAG_FCP_FILE_DESC_82:
				displayData += " [File Descriptor] <br>";
				displayData += TAB2 + analyzeFileDescriptor82TLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case BTAG_FCP_FILE_ID_83:
				displayData += " [File ID] <br>";
				displayData += TAB2 + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_DF_NAME_84:
				displayData += " [DF Name (AID)] <br>";
				displayData += TAB2 + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_LCSI_8A:
				displayData += " [Life Cycle Status Information] <br>";
				displayData += TAB2 + analyzeFileLcsi8ATLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case BTAG_FCP_SA_COMPACT_8C:
			case BTAG_FCP_SA_EXPANDED_AB:
			case BTAG_FCP_SA_REFERENCED_AB:
				if (tag == BTAG_FCP_SA_COMPACT_8C) {
					displayData += " [Security Attributes:Compact] <br>";
				} else if (tag == BTAG_FCP_SA_EXPANDED_AB) {
					displayData += " [Security Attributes:Expanded] <br>";
				} else {
					displayData += " [Security Attributes:Referenced] <br>";
				}
				displayData += TAB2 + analyzeFileSaTLV(lcData, offset + (1 + tagByteNum) * 2, tag_len) + "<br>";
				break;
			case BTAG_FCP_TOTAL_FILE_SIZE_81:
				displayData += " [Total File Size] <br>";
				displayData += TAB2 + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			case BTAG_FCP_PSDO_C6:
				displayData += " [PIN Status Template DO] <br>";
				displayData += analyzeFilePsdo81TLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				break;
			case BTAG_FCP_PROPRIETARY_85:
			case BTAG_FCP_PROPRIETARY_A5:
				displayData += " [Application dependent data] <br>";
				if (isAnalyzeResponse == 0) {
					displayData += analyzeFileProprietaryA5TLV(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				} else {
					displayData += analyzeFileProprietaryA5TLVForResp(lcData, offset + (1 + tagByteNum) * 2, tag_len);
				}
				break;

			case BTAG_FCP_FILE_SIZE_80:
				displayData += " [File Size] <br>";
				displayData += TAB2 + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;	
			case BTAG_FCP_SFI_88:
				displayData += " [Short File Identifier] <br>";
				displayData += TAB2 + lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;	

			default:
				displayData += " [Self dependent data] ";
				displayData += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
		}

		offset += (1 + tagByteNum + tag_len) * 2;
	}

	return displayData;
}
/*
	00E00000286226C10305F155C3010482044221002C83022F068A01058B032F0605800203F4880130A503C00100
*/
function analyzeCreateFile(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   ins += " [CREATE FILE]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   var showAnalyseData;
   var btag = lcData.substr(0, 2);

   var lenInfo = getBerTLVLenInfo(lcData.substr(2));
   var tagByteNum = lenInfo[0];
   lc -= (1 + tagByteNum);	// exclude byte number for tag + len
   lcData = lcData.substr((1 + tagByteNum) * 2); // bertlv-list

   showAnalyseData = btag + " " + apduData.substr(12, tagByteNum * 2) + " [FCP Template] <br>" + 
   					analyzeFcpTemplate(lcData, lc);
   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
	00E40000022F06
*/
function analyzeDeleteFile(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   ins += " [DELETE FILE]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   var showAnalyseData = lcData.substr(0, lc * 2) + " [File ID] <br>";
   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}


/*
	00E6000000
	00E8000000
	00FE000000
*/
function analyzeTerminate(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   if (ins == "E6") {
		ins += " [TERMINATE DF]";
   } else if (ins == "E8") {
		ins += " [TERMINATE EF]";
   } else {
		ins += " [TERMINATE CARD USAGE]";
   }

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   var showAnalyseData = lcData.substr(0, lc * 2) + "<br>";
   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
	0084000002
*/
function analyzeGetChallenge(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   ins += " [GET CHALLENGE]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var leHex = "0x" + getLc(apduData);

   organizeDisplayDiv(cla, ins, p1, p2, "Not Present",  "Data Field is Not Present" + "<br>" + "Le: " + leHex);
}

/*
	0070000001
*/
function analyzeManageChannel(apduData) {
   var cla = getCla(apduData);

   var ins = getIns(apduData);
   ins += " [MANAGE CHANNEL]";

   var p1 = getP1(apduData);
   var original_p1 = p1;
   if (p1 == "00") {
      p1 += " [" + "Open the Supplementary Logical Channel" + "]";
   } else if (p1 == "80") {
      p1 += " [" + "Close the Supplementary Logical Channel" + "]";
   }

   var p2 = getP2(apduData);
   if (original_p1 == "00" && p2 == "00") {
      p2 += " [Logical channel to be internally assigned by the UICC]";
   } else {
      p2 += " [Supplementary Logical Channel Number]";
   }

   organizeDisplayDiv(cla, ins, p1, p2, "Not present", "Not present");
}

/*
	00040000043F007F10
	00440000043F007F10
*/
function analyzeActivateAndDeactivateFile(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   var dataMeaning = "";
  
   if (cla == "A0") {
		if (ins == "04") {
			ins += " [INVALIDATE]";
		} else {
			ins += " [REHABILITATE]";
		}
   } else {
	   if (ins == "04") {
			ins += " [DEACTIVATE FILE]";
		} else {
			ins += " [ACTIVATE FILE]";
		}
   }
   
   var p1 = getP1(apduData);
   if (p1 == "00") {
      p1 += " [Select EF by file id]";
	  dataMeaning = " [File ID]";
   } else if (p1 == "08") {
      p1 += " [Select by path from MF]";
	   dataMeaning = " [File Path]";
   } else if (p1 == "09") {
      p1 += " [Select by path from current DF]";
	   dataMeaning = " [File Path]";
   } else {
	   p1 += " [RFU]";
   }

   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);
   var showAnalyseData = "";

   if (lcData.substr(0, lc * 2) != "") {
		showAnalyseData = lcData.substr(0, lc * 2) + dataMeaning + "<br>";
   }

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
	80D4000013621183022F068002001081020012A503C10101
*/
function analyzeResizeFile(apduData) {
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   ins += " [RESIZE FILE]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   var showAnalyseData;
   var btag = lcData.substr(0, 2);

   var lenInfo = getBerTLVLenInfo(lcData.substr(2));
   var tagByteNum = lenInfo[0];
   lc -= (1 + tagByteNum);	// exclude byte number for tag + len
   lcData = lcData.substr((1 + tagByteNum) * 2); // bertlv-list

   showAnalyseData = btag + " " + apduData.substr(12, tagByteNum * 2) + " [FCP Template] <br>" + 
   					analyzeFcpTemplate(lcData, lc);
   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
80F2000000
*/
function analyzeStatus(apduData) {
   var cla = getCla(apduData);

   var ins = getIns(apduData);
   ins += " [STATUS]";

   var p1 = getP1(apduData);
   var original_p1 = p1;
   if (p1 == "00") {
      p1 += " [No indication]";
   } else if (p1 == "01") {
      p1 += " [Current application is initialized in the terminal]";
   } else if (p1 == "02") {
      p1 += " [The terminal will initiate the termination of the current application]";
   } else {
      p1 += " [RFU]";
   }

   var p2 = getP2(apduData);
   if (p2 == "00") {
      p2 += " [Response parameters and data are identical to the response parameters and data of the SELECT command]";
   } else if (p2 == "01") {
      p2 += " [The DF name TLV-object of the currently selected application is returned]";
   } else if (p2 == "0C") {
      p2 += " [No data returned]";
   } else {
      p2Hex += " [RFU]";
   }

   /*
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var le = "00";
   if (lc != 0) {
      le = lcHex;
   }
   */

   organizeDisplayDiv(cla, ins, p1, p2, "Not present", "Not present");
}

/*
A0FA000000
*/
function analyzeSleep(apduData) {
   var cla = getCla(apduData);

   var ins = getIns(apduData);
   ins += " [SLEEP]";

   var p1 = getP1(apduData);
   var p2 = getP2(apduData);

   organizeDisplayDiv(cla, ins, p1, p2, "Not present", "Not present");
}

/*
00B0001202
00D6000003121212
*/
function analyzeReadAndUpdateBinary(apduData) {
   var showAnalyseData;
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   var p1 = getP1(apduData);
   var p1Hex = parseInt("0x" + p1);
   if ((p1Hex & 0x80) == 0x00) {
      p1 += " [b7 to b1 is the offset to the first byte to read - P2 is the low part of the offset]";
   }  else {
      p1 += " [SFI referencing used, b1 to b5 are the SFI and P2 is the offset to the first byte to read]";
   }

   var p2 = getP2(apduData);
   p2 += " [Offset low]";

   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   if (ins == "B0") {
	   ins += " [READ BINARY]";
	   lcHex = " [Not Present] ";
	   showAnalyseData = " [Not Present] ";
   } else {
	   ins += " [UPDATE BINARY]";
	   showAnalyseData = lcData + " [String of data to be updated] ";
   }

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
00B2000400
00DC000403121212
*/
function analyzeReadAndUpdateRecord(apduData) {
   var showAnalyseData;
   var cla = getCla(apduData);
   var ins = getIns(apduData);

   var p1 = getP1(apduData);
   p1 += " [Record number]";

   var p2 = getP2(apduData);
   var p2Hex = parseInt("0x" + p2);
   p2 += " [";
   if ((p2Hex & 0x07) == 0x02) {
       p2 += " Next record, ";
   } else if ((p2Hex & 0x07) == 0x03) {
	   p2 += " Previous record, "
   } else if ((p2Hex & 0x07) == 0x04)  {
       p2 += " Absolute/current mode, ";
   } else {
	   p2 += " Not Definition, ";
   }
   if ((p2Hex & 0xF8) == 0x00) {
       p2 += " Currently selected EF";
   } else {
	   p2 += " Short File identifier (from 1 to 30)";
   }
   p2 += " ]";

   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   if (ins == "B2") {
	   ins += " [READ RECORD]";
	   lcHex = " [Not Present] ";
	   showAnalyseData = " [Not Present] ";
   } else {
	   ins += " [UPDATE RECORD]";
	   showAnalyseData = lcData + " [String of data to be updated] ";
   }

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
00A200060405121010
*/
function analyzeSearchRecord(apduData) {
   var showAnalyseData;
   var cla = getCla(apduData);
   var ins = getIns(apduData);

   var p1 = getP1(apduData);
   p1 += " [Record number]";

   var p2 = getP2(apduData);
   var p2Hex = parseInt("0x" + p2);
   p2 += " [";
   
   if ((p2Hex & 0x07) == 0x04) {
       p2 += " Simple search, Start forward search from record indicated in P1, ";
   } else if ((p2Hex & 0x07) == 0x05) {
	   p2 += " Simple search, Start backward search from record indicated in P1, ";
   } else if ((p2Hex & 0x07) == 0x06)  {
       p2 += " Enhanced search, ";
   } else if ((p2Hex & 0x07) == 0x07)  {
       p2 += " Proprietary search, ";
   } else {
	   p2 += " RFU, ";
   }
   if ((p2Hex & 0xF8) == 0x00) {
       p2 += " Currently selected EF";
   } else if ((p2Hex & 0xF8) == 0xF8) {
	   p2 += " RFU";
   } else {
	   p2 += " Short File identifier";
   }
   p2 += " ]";

   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   if ((p2Hex & 0x07) == 0x06) {
	   var searchMeaning = " [Search Indication: ";
	   var firstByte = lcData.substr(0, 2);
	   var firstByteHex = parseInt("0x" +firstByte);

	   if ((firstByteHex & 0x08) == 0x08) {
		   searchMeaning += "First byte is the search starts in the record after the first occurrence of the value contained in the second byte of the search indication, ";
	   } else {
		   searchMeaning += "First byte is the search starts in the record from the offset (absolute position) given in the second byte of the search indication, ";
	   }

	   if ((firstByteHex & 0x07) == 0x04) {
		   searchMeaning += " Start forward search form record indicated in P1";
	   } else if ((firstByteHex & 0x07) == 0x05) {
		   searchMeaning += " Start backward search form record indicated in P1";
	   } else if ((firstByteHex & 0x07) == 0x06) {
		   searchMeaning += " Start forward search from next record";
	   } else if ((firstByteHex & 0x07) == 0x07) {
		   searchMeaning += " Start backward search form previous record";
	   } else {
		   searchMeaning += " RFU";
	   }

	   searchMeaning += "; ";
	   var secondByte = lcData.substr(2, 2);
	   if ((firstByteHex & 0x08) == 0x08) {
		   searchMeaning += "Second byte: value";
	   } else {
		   searchMeaning += "Second byte: offset";
	   }
	   searchMeaning += "] ";

	   lcData = firstByte + secondByte + searchMeaning + lcData.substr(4, lc * 2 - 4)
   }

	ins += " [SEARCH RECORD]";
	showAnalyseData = lcData + " [Search string] ";

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
00328200021212
*/
function analyzeIncrease(apduData) {
   var showAnalyseData;
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   var p1 = getP1(apduData);
   var p1Hex = parseInt("0x" + p1);
   if (p1 == "00") {
      p1 += " [Increase the currently selected EF]";
   }  else {
      p1 += " [SFI referencing used, b1 to b5 are the SFI, SFI is " + numToHexString(p1Hex & 0x1F) + "]";
   }

   var p2 = getP2(apduData);

   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   ins += " [INCREASE]";
   showAnalyseData = lcData + " [Value to be added] ";

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

/*
00C0000012
*/
function analyzeGetResponse(apduData) {
   var showAnalyseData;
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   var p1 = getP1(apduData);
   var p2 = getP2(apduData);

   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   //var lcData = getDataField(apduData, lc * 2);

   ins += " [GET RESPONSE]";
   //showAnalyseData = lcData;

   organizeDisplayDiv(cla, ins, p1, p2, "Le: " + lcHex, "Not Present");
}

/*
INS_VERIFY:0020001F081212121212121212
INS_CHANGE_PIN:
INS_DISABLE_PIN:
INS_ENABLE_PIN:
INS_UNBLOCK_PIN:
*/
function analyzePinCmd(apduData) {
   var showAnalyseData;
   var cla = getCla(apduData);
   var ins = getIns(apduData);
   var p1 = getP1(apduData);
   var p2 = getP2(apduData);
   var lcHex = "0x" + getLc(apduData);
   var lc = parseInt(lcHex);
   var lcData = getDataField(apduData, lc * 2);

   if (cla == "A0") {
	   // 2G
	    p2 += " [CHV No.]";
	   
		if (ins == INS_VERIFY) {
			ins += " [VERIFY CHV]";
		} else if (ins == INS_CHANGE_PIN)  {
			ins += " [CHANGE CHV]";
		} else if (ins == INS_DISABLE_PIN)  {
			ins += " [DISABLE CHV]";
		} else if (ins == INS_ENABLE_PIN)  {
			ins += " [ENABLE CHV]";
		} else if (ins == INS_UNBLOCK_PIN)  {
			ins += " [UNBLOCK CHV]";
		} 

		if (lc > 0) {
			if (ins == INS_CHANGE_PIN) {
				showAnalyseData = lcData.substr(0, 16) + " [Old CHV value] ";
				showAnalyseData = lcData.substr(16, 16) + " [New CHV value] ";
			} else if (ins == INS_UNBLOCK_PIN) {
				showAnalyseData = lcData.substr(0, 16) + " [UNBLOCK CHV value] ";
				showAnalyseData = lcData.substr(16, 16) + " [New CHV value] ";
			} else {
				showAnalyseData = lcData.substr(0, 16) + " [CHV value] ";
			}
		} 
   } else {
	   // 3G
	   var p1Hex =  parseInt("0x" + p1);
	   if (ins == INS_DISABLE_PIN) {
		   p1 += " [";
		   if (p1Hex == 0) {
			   p1 += "Verification data present in data field";
		   } else if (p1Hex == 1) {
			   p1 += "Reserved by ISO/IEC 7816-4";
		   } else {
			    if ((p1Hex & 0x80) == 0x80) {
					p1 += " Verification data present, and use reference data number as verification replacement, ";
				}
				p1 += "Global key reference data number: " + numToHexString(p1Hex & 0x1F);
		   }
		   p1 += "]";
	   }

	    var p2Hex = parseInt("0x" + p2);
	    p2 += " [";
		if (p2Hex == 0) {
			p2 += "Not supported";
		} else {
			if ((p2Hex & 0x80) == 0x80) {
				p2 += " Specific reference data (e.g. DF specific/application dependent PIN), ";
			} else {
				p2 += " Global reference data (e.g. MF specific PIN), ";
			}
			p2 += "Reference data number : " + numToHexString(p2Hex & 0x1F);
		}
		p2 += "]";

		if (ins == INS_VERIFY) {
	   		ins += " [VERIFY PIN]";
		} else if (ins == INS_CHANGE_PIN)  {
			ins += " [CHANGE PIN]";
		} else if (ins == INS_DISABLE_PIN)  {
			ins += " [DISABLE PIN]";
		} else if (ins == INS_ENABLE_PIN)  {
			ins += " [ENABLE PIN]";
		} else if (ins == INS_UNBLOCK_PIN)  {
			ins += " [UNBLOCK PIN]";
		} 

		if (lc > 0) {
			if (ins == INS_CHANGE_PIN) {
				showAnalyseData = lcData.substr(0, 16) + " [Old PIN value] ";
				showAnalyseData = lcData.substr(16, 16) + " [New PIN value] ";
			} else if (ins == INS_UNBLOCK_PIN) {
				showAnalyseData = lcData.substr(0, 16) + " [UNBLOCK PIN value] ";
				showAnalyseData = lcData.substr(16, 16) + " [New PIN value] ";
			} else {
				showAnalyseData = lcData.substr(0, 16) + " [PIN value] ";
			}
		} else {
			showAnalyseData = " [Empty] ";
		}
   } 

   organizeDisplayDiv(cla, ins, p1, p2, lcHex, showAnalyseData);
}

function analyzeUiccApdu(apduData) {
	var pro_cmd_tag = apduData.substr(0, 2);
	if (pro_cmd_tag == BTAG_PRO_CMD_D0) {
		// support analyse proactive command(non command apdu) for Fetch command;
		var lenInfo = getBerTLVLenInfo(apduData.substr(2));
		var tagByteNum = lenInfo[0];
		apduData = apduData.substr((1 + tagByteNum) * 2); // bertlv-list
		analyzeProactiveCmd(apduData, apduData.length / 2);
		return;
	}

	// command apdu
	var ins = apduData.substr(2, 2);
	switch (ins) {
	case INS_MANAGE_CHANNEL:
	  analyzeManageChannel(apduData);
	  break;
	case INS_MANAGE_SECURE_CHANNEL:
	  analyze(apduData);
	  break;
	case INS_TRANSACT_DATA:
	  analyze(apduData);
	  break;
	case INS_STATUS:
	  analyzeStatus(apduData);
	  break;
	case "FA":
	  analyzeSleep(apduData);
	  break;
	case INS_GET_RESPONSE:
	  analyzeGetResponse(apduData);
	  break;
	case INS_TERMINAL_CAPABILITY:
	  analyze(apduData);
	  break;
	case INS_AUTHENTICATE1:
	case INS_AUTHENTICATE2:
	  analyze(apduData);
	  break;
	case INS_GET_CHALLENGE:
	  analyzeGetChallenge(apduData);
	  break;
	
	case INS_SELECT:
	  analyzeSelect(apduData);
	  break;
	case INS_CREATE_FILE_E0:
	  analyzeCreateFile(apduData);
	  break;
	case INS_DELETE_FILE_E4:
	  analyzeDeleteFile(apduData);
	  break;
	case INS_DEACTIVATE_FILE_04:
	case INS_ACTIVATE_FILE_44:
	  analyzeActivateAndDeactivateFile(apduData);
	  break;
	/*
	case INS_DEACTIVATE_FILE:
	  analyze(apduData);
	  break;
	case INS_ACTIVATE_FILE:
	  analyze(apduData);
	  break;
	*/
	case INS_TERMINATE_DF_E6:
	case INS_TERMINATE_EF_E8:
	case INS_TERMINATE_CARD_USAGE_FE:
	  analyzeTerminate(apduData);
	  break;
	case INS_RESIZE_FILE_D4:
	  analyzeResizeFile(apduData);
	  break;
	case INS_READ_BINARY:
	case INS_UPDATE_BINARY:
	  analyzeReadAndUpdateBinary(apduData);
	  break;
	case INS_READ_RECORD:
	case INS_UPDATE_RECORD:
	  analyzeReadAndUpdateRecord(apduData);
	  break;
	case INS_SEARCH_RECORD:
	  analyzeSearchRecord(apduData);
	  break;
	case INS_INCREASE:
	  analyzeIncrease(apduData);
	  break;
	case INS_RETRIEVE_DATA:
	  analyze(apduData);
	  break;
	case INS_SET_DATA:
	  analyze(apduData);
	  break;

	case INS_VERIFY:
	case INS_CHANGE_PIN:
	case INS_DISABLE_PIN:
	case INS_ENABLE_PIN:
	case INS_UNBLOCK_PIN:
	  analyzePinCmd(apduData);
	  break;
	
	case INS_TERMINAL_PROFILE:
	  analyzeTerminalProfile(apduData);
	  break;
	case INS_ENVELOPE:
	  analyzeEnvelope(apduData);
	  break;
	case INS_FETCH:
	  analyzeFetch(apduData);
	  break;
	case INS_TERMINAL_RESPONSE:
	  analyzeTerminalResponse(apduData);
	  break;

	default:
	  alert("Not Supported!");
	  return;
	};
}


function Other(apduData) {
   var analyzeResult = "";
   var offset = 0;
   var tag = apduData.substr(offset, 2);
   var tagLen = 0;

   if (tag == "62") {
	  var lenInfo = getBerTLVLenInfo(apduData.substr(offset + 2));
	  var tagByteNum = lenInfo[0];
	  var tag_len = lenInfo[1];	// hex value, multiple 2 is string value
	  //tag = ignoreBit8ForTag(tag);
	  analyzeResult += TAB + tag + " " + apduData.substr(offset + 2, tagByteNum * 2) + " [File Control Information] <br>";

      offset += 2 + tagByteNum * 2;
	  len =  offset + tag_len * 2;
      while (offset < len) {
		lenInfo = getBerTLVLenInfo(apduData.substr(offset + 2));
		tagByteNum = lenInfo[0];
		tag_len = lenInfo[1];	// hex value, multiple 2 is string value
		tag = apduData.substr(offset, 2);
		//tag = ignoreBit8ForTag(tag);
		analyzeResult += TAB2 + apduData.substr(offset, 2) + " " + apduData.substr(offset + 2, tagByteNum * 2); 
         
		switch (tag) {
			case BTAG_FCP_PSDO_90:
				analyzeResult += " [PS_DO] ";
				analyzeResult += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
			default:
				analyzeResult += " [Self dependent data] ";
				analyzeResult += lcData.substr(offset + (1 + tagByteNum) * 2, tag_len * 2) + "<br>";
				break;
		}

		offset += (1 + tagByteNum + tag_len) * 2;
      }
   } else {
      alert("Not Supported Tag:" + tag);
      return;
   }

   $("#data_field").html(analyzeResult);
}

/*
	62298202782183023F00A5098001718701008801008A01058B032F0601C60C9001C0950100830111830101
*/
function analyzeSelectResponse(apduData) {
	var tag = apduData.substr(0, 2);
	if (tag != "62") {
		 alert("Not Supported Tag:" + tag);
      	 return;
	}

	var lenInfo = getBerTLVLenInfo(apduData.substr(2));
	var tagByteNum = lenInfo[0];
	var tagLen = lenInfo[1];	// hex value, multiple 2 is string value
	var fcpData = apduData.substr((1 + tagByteNum) * 2); // bertlv-list

	isAnalyzeResponse = 1;
	var analyzeResult = tag + " " + apduData.substr(2, tagByteNum * 2) + " [FCP Template] <br>" + 
					analyzeFcpTemplate(fcpData, tagLen);
	isAnalyzeResponse = 0;

	$("#data_field").html(analyzeResult);
}

/*
	FCP: 622D8202382183027FF38410A0000000871002FF86FFFFFFFFFFFF048A01058B032F0601C6099001C0830101830181
    DF Name: 8410A0000000871002FF86FFFFFFFFFFFF04
*/
function analyzeStatusResponse(apduData) {
	var analyzeResult;
	var tag = apduData.substr(0, 2);
	var lenInfo = getBerTLVLenInfo(apduData.substr(2));
	var tagByteNum = lenInfo[0];
	var tagLen = lenInfo[1];	// hex value, multiple 2 is string value
	var fcpData = apduData.substr((1 + tagByteNum) * 2); // bertlv-list

	if (tag == "62") {
		isAnalyzeResponse = 1;
		analyzeResult = tag + " " + apduData.substr(2, tagByteNum * 2) + " [FCP Template] <br>" + 
						analyzeFcpTemplate(fcpData, tagLen);
		isAnalyzeResponse = 0;
	} else if (tag == "84") {
		analyzeResult = tag + " " + apduData.substr(2, tagByteNum * 2) + " [DF name TLV-object] <br>" + TAB + fcpData;
	} else {
		alert("Not Supported Tag:" + tag);
      	return;
	}

	$("#data_field").html(analyzeResult);
}

/*
TLS Handshake Message:
  ClientHello:
    160303003C0100003803038EC6AFC4796A4CDF9B3100A5E0AB544C5A4444ACC2BFC215D309E8A62EDD284900000A008B008C002C00AE00B0010000050001000102
  ServerHello:
    16030300510200004D03035EBA75AF63DFA2E34A9BC86D0CF1171810B4D875C60C967C94DD8766CA6C7435202C63D1A9581B256E918B78EECCFF85A5A7E87E4620F0ACE3A08166EEEEFDDB1900AE0000050001000102
  ServerHelloDone:
    16030300040E000000
  ClientKeyExchange:
    160303001A1000001600143839383630303930303331353030313030303030
  ChangeCipherSpec:
    140303000101
  Finished:
    1603030050598E3B7B4E5D6FBEA4A236AEE5EDF8C7BB5174E9073CB8DA02B667949EED11F6B4AF79FC9208E23C0F0451221CC9EE295C61DD352E3AD3BDA8841F41F4AC54FA6DB429E22F37446D6B99CB7F5E5B2DFE
  Application Data:
	17030300C0FC27DBE031BE4C9D58D1E65E59E6187BF7E43A7DD5CA0F906F0F508C586BA5B3F7DA6EE2DB5A6D4E6194E1FCD110F66892B2F6C8DC365801F69F803CF33E370223F997787C91C03AAFD31AE3C2FA371045FE323393F418B50D925D4F9B2FF75C5515AFE63B2BDA08429ACAE8A156BE5DB767FA360E61A20F2D3D3A25BFD64F25E6AFC672D8CEC67A591A1E63B155891EA60B507E926425C773053CB229F34A4282AED3C95E791AFDE94EEC4952A4D16BAE16F4C563C003F4D79C62C4C6AD13AD
  Alert:
	15030300020214
*/
function analyzeCipherSuite(cipherData) {
	var cipherSuite = "";
	var off = 0;
	var cipherSuiteLen = cipherData.length;
	while (off < cipherSuiteLen) {
		var cipherSuiteVal = cipherData.substr(off, 4);
		cipherSuite += cipherSuiteVal;
		switch (cipherSuiteVal) {
			case "008B":
				cipherSuite += "[TLS_PSK_WITH_3DES_EDE_CBC_SHA]" + BR;
				break;
			case "008C":
				cipherSuite += "[TLS_PSK_WITH_AES_128_CBC_SHA]" + BR;
				break;
			case "002C":
				cipherSuite += "[TLS_PSK_WITH_NULL_SHA]" + BR;
				break;
			case "00AE":
				cipherSuite += "[TLS_PSK_WITH_AES_128_CBC_SHA256]" + BR;
				break;
			case "00B0":
				cipherSuite += "[TLS_PSK_WITH_NULL_SHA256]" + BR;
				break;
			case "002D":
				cipherSuite += "[TLS_DHE_PSK_WITH_NULL_SHA]" + BR;
				break;
			case "002E":
				cipherSuite += "[TLS_RSA_PSK_WITH_NULL_SHA]" + BR;
				break;
			case "008A":
				cipherSuite += "[TLS_PSK_WITH_RC4_128_SHA]" + BR;
				break;
			case "008D":
				cipherSuite += "[TLS_PSK_WITH_AES_256_CBC_SHA]" + BR;
				break;
			case "008E":
				cipherSuite += "[TLS_DHE_PSK_WITH_RC4_128_SHA]" + BR;
				break;
			case "008F":
				cipherSuite += "[TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA]" + BR;
				break;
			case "0090":
				cipherSuite += "[TLS_DHE_PSK_WITH_AES_128_CBC_SHA]" + BR;
				break;
			case "0091":
				cipherSuite += "[TLS_DHE_PSK_WITH_AES_256_CBC_SHA]" + BR;
				break;
			case "0092":
				cipherSuite += "[TLS_RSA_PSK_WITH_RC4_128_SHA]" + BR;
				break;
			case "0093":
				cipherSuite += "[TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA]" + BR;
				break;
			case "0094":
				cipherSuite += "[TLS_RSA_PSK_WITH_AES_128_CBC_SHA]" + BR;
				break;
			case "0095":
				cipherSuite += "[TLS_RSA_PSK_WITH_AES_256_CBC_SHA]" + BR;
				break;
			case "00A8":
				cipherSuite += "[TLS_PSK_WITH_AES_128_GCM_SHA256]" + BR;
				break;
			case "00A9":
				cipherSuite += "[TLS_PSK_WITH_AES_256_GCM_SHA384]" + BR;
				break;
			case "00AA":
				cipherSuite += "[TLS_DHE_PSK_WITH_AES_128_GCM_SHA256]" + BR;
				break;
			case "00AB":
				cipherSuite += "[TLS_DHE_PSK_WITH_AES_256_GCM_SHA384]" + BR;
				break;
			case "00AC":
				cipherSuite += "[TLS_RSA_PSK_WITH_AES_128_GCM_SHA256]" + BR;
				break;
			case "00AD":
				cipherSuite += "[TLS_RSA_PSK_WITH_AES_256_GCM_SHA384]" + BR;
				break;
			case "00AE":
				cipherSuite += "[TLS_PSK_WITH_AES_128_CBC_SHA256]" + BR;
				break;
			case "00AF":
				cipherSuite += "[TLS_PSK_WITH_AES_256_CBC_SHA384]" + BR;
				break;
			case "00B0":
				cipherSuite += "[TLS_PSK_WITH_NULL_SHA256]" + BR;
				break;
			case "00B1":
				cipherSuite += "[TLS_PSK_WITH_NULL_SHA384]" + BR;
				break;
			case "00B2":
				cipherSuite += "[TLS_DHE_PSK_WITH_AES_128_CBC_SHA256]" + BR;
				break;
			case "00B3":
				cipherSuite += "[TLS_DHE_PSK_WITH_AES_256_CBC_SHA384]" + BR;
				break;
			case "00B4":
				cipherSuite += "[TLS_DHE_PSK_WITH_NULL_SHA256]" + BR;
				break;
			case "00B5":
				cipherSuite += "[TLS_DHE_PSK_WITH_NULL_SHA38]" + BR;
				break;
			case "00B6":
				cipherSuite += "[TLS_RSA_PSK_WITH_AES_128_CBC_SHA256]" + BR;
				break;
			case "00B7":
				cipherSuite += "[TLS_RSA_PSK_WITH_AES_256_CBC_SHA384]" + BR;
				break;
			case "00B8":
				cipherSuite += "[TLS_RSA_PSK_WITH_NULL_SHA256]" + BR;
				break;
			case "00B9":
				cipherSuite += "[TLS_RSA_PSK_WITH_NULL_SHA384]" + BR;
				break;
			default:
				break;
		}
		off += 4;
	}

	return cipherSuite;
}

function analyzeTlsMessage(apduData) {
	var analyzeResult = "";
	var tag = apduData.substr(0, 2);
	var tlsVer;

	tlsVer = apduData.substr(2, 4);
	if (tlsVer == "0301") {
		tlsVer += "[TLS version 1.0]";	
	} else if (tlsVer == "0302") {
		tlsVer += "[TLS version 1.1]";	
	} else if (tlsVer == "0303") {
		tlsVer += "[TLS version 1.2]";	
	} else {
		analyzeResult = apduData;
		return;
	}

	if (tag == "16") {
		var off = 6;
		var len = apduData.length;
		analyzeResult += tag + "[Handshake protocol] " + BR;
		analyzeResult += tlsVer + BR;
		analyzeResult += apduData.substr(off, 4) + "[TLS message length]" + BR;
		off += 4;

		var handshakeType = apduData.substr(off, 2);
		off += 2;
		if (handshakeType == "01") {
			// ClientHello
			analyzeResult += handshakeType + "[ClientHello]" + BR;
			analyzeResult += apduData.substr(off, 6) + "[handshake message length]" + BR;
			off += 6;
			analyzeResult += apduData.substr(off, 4) + "[handshake version]" + BR;
			off += 4;
			analyzeResult += apduData.substr(off, 64) + "[gmt_unix_time(4bytes) + random(28 bytes)]" + BR;
			off += 64;
			analyzeResult += apduData.substr(off, 2) + "[session id length]" + BR;
			off += 2;

			var cipherSuiteLen = apduData.substr(off, 4);
			analyzeResult += cipherSuiteLen + "[cipher suite length]" + BR;
			off += 4;
			cipherSuiteLen = parseInt("0x" + cipherSuiteLen);
			cipherSuiteLen *= 2;
			analyzeResult += analyzeCipherSuite(apduData.substr(off, cipherSuiteLen));
			off += cipherSuiteLen;

			analyzeResult += apduData.substr(off, 2) + "[compression length]" + BR;
			off += 2;
			analyzeResult += apduData.substr(off, 2) + "[compression method]" + BR;
			off += 2;
			analyzeResult += apduData.substr(off, 4) + "[Extension_message_length]" + BR;
			off += 4;
			analyzeResult += apduData.substr(off) + "[Extension_message]" + BR;
		} else if (handshakeType == "02") {
			analyzeResult += handshakeType + "[ServerHello]" + BR;
			analyzeResult += apduData.substr(off, 6) + "[handshake message length]" + BR;
			off += 6;
			analyzeResult += apduData.substr(off, 4) + "[handshake version]" + BR;
			off += 4;
			analyzeResult += apduData.substr(off, 64) + "[gmt_unix_time(4bytes) + random(28 bytes)]" + BR;
			off += 64;

			var sessionIdLen = apduData.substr(off, 2);
			analyzeResult += sessionIdLen + "[session id length]" + BR;
			off += 2;
			sessionIdLen = parseInt("0x" + sessionIdLen) * 2;
			analyzeResult += apduData.substr(off, sessionIdLen) + "[session id]" + BR;
			off += sessionIdLen;

			analyzeResult += analyzeCipherSuite(apduData.substr(off, 4));
			off += 4;
			analyzeResult += apduData.substr(off, 2) + "[compression method]" + BR;
			off += 2;

			var extensionLen = apduData.substr(off, 4);
			analyzeResult += extensionLen + "[Extension_message_length]" + BR;
			off += 4;
			extensionLen = parseInt("0x" + extensionLen) * 2;
			analyzeResult += apduData.substr(off, extensionLen) + "[Extension_message]" + BR;
			off += extensionLen;

			if (off < len) {
				analyzeResult += apduData.substr(off, 2) + "[ServerHelloDone]" + BR;
				off += 2;
				analyzeResult += apduData.substr(off, 6) + "[handshake message length]" + BR;
				off += 6;
			}
		} else if (handshakeType == "0E") {
			// ServerHelloDone
			analyzeResult += handshakeType + "[ServerHelloDone]" + BR;
			analyzeResult += apduData.substr(off, 6) + "[handshake message length]" + BR;
			off += 6;		
		} else if (handshakeType == "10") {
			// ClientKeyExchange
			analyzeResult += handshakeType + "[ClientKeyExchange]" + BR;
			analyzeResult += apduData.substr(off, 6) + "[handshake message length]" + BR;
			off += 6;
			analyzeResult += apduData.substr(off, 4) + "[psk identity length]" + BR;
			off += 4;
			analyzeResult += apduData.substr(off) + "[psk identity]" + BR;		
		} else {
			// Finished
			analyzeResult += apduData.substr(off) + "[EncryptData:Handshake type(0x14) + length + Verify-data]" + BR;		
		}
	} else if (tag == "14") {
		analyzeResult = tag + "[ChangeCipherSpec protocol] " + BR;
		analyzeResult += tlsVer + BR;
		analyzeResult += apduData.substr(6, 4) + "[TLS message length]" + BR;
		analyzeResult += apduData.substr(10, 2) + "[changeCipherSpec]" + BR;
	} else if (tag == "17") {
		analyzeResult = tag + "[Application data] " + BR;
		analyzeResult += tlsVer + BR;
		analyzeResult += apduData.substr(6, 4) + "[TLS message length]" + BR;
		analyzeResult += apduData.substr(10) + "[Encrypted message]" + BR;
	} else if (tag == "15") {
		analyzeResult = tag + "[Alert Protocol] " + BR;
		analyzeResult += tlsVer + BR;
		analyzeResult += apduData.substr(6, 4) + "[TLS message length]" + BR;
		
		var alertLevel = apduData.substr(10, 2);
		var alertDesc = apduData.substr(12, 2);
		if (alertLevel == "01") {
			alertLevel += "[warning level]";
		} else if (alertLevel == "02") {
			alertLevel += "[fatal level]";
		}
		analyzeResult += alertLevel + BR;

		var alertDescNum = parseInt("0x" + alertDesc);
		switch(alertDescNum) {
			case 0:
				alertDesc += "[close_notify]";
				break;
			case 10:
				alertDesc += "[unexpected_message]";
				break;
			case 20:
				alertDesc += "[bad_record_mac]";
				break;
			case 21:
				alertDesc += "[decryption_failed_RESERVED]";
				break;
			case 22:
				alertDesc += "[record_overflow]";
				break;
			case 30:
				alertDesc += "[decompression_failure]";
				break;
			case 40:
				alertDesc += "[handshake_failure]";
				break;
			case 41:
				alertDesc += "[no_certificate_RESERVED]";
				break;
			case 42:
				alertDesc += "[bad_certificate]";
				break;
			case 43:
				alertDesc += "[unsupported_certificate]";
				break;
			case 44:
				alertDesc += "[certificate_revoked]";
				break;
			case 45:
				alertDesc += "[certificate_expired]";
				break;
			case 46:
				alertDesc += "[certificate_unknown]";
				break;
			case 47:
				alertDesc += "[illegal_parameter]";
				break;
			case 48:
				alertDesc += "[unknown_ca]";
				break;
			case 49:
				alertDesc += "[access_denied]";
				break;
			case 50:
				alertDesc += "[decode_error]";
				break;
			case 51:
				alertDesc += "[decrypt_error]";
				break;
			case 60:
				alertDesc += "[export_restriction_RESERVED]";
				break;
			case 70:
				alertDesc += "[protocol_version]";
				break;
			case 71:
				alertDesc += "[insufficient_security]";
				break;
			case 80:
				alertDesc += "[internal_error]";
				break;
			case 90:
				alertDesc += "[user_canceled]";
				break;
			case 100:
				alertDesc += "[no_renegotiation]";
				break;
			case 110:
				alertDesc += "[unsupported_extension]";
				break;
			default:
				break;
		}
		analyzeResult += alertDesc + BR;
	} else {
		alert("Not Supported Tag:" + tag);
      	return;
	}

	$("#data_field").html(analyzeResult);
}
