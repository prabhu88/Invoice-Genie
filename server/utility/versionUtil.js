const VERSION_HISTORY = ["v1.0", "v1.1","v1.2","v2.0"];


const vScript = {
  "v001": {
    offlinedb: [],
    gstindb: [

      "CREATE TABLE IF NOT EXISTS gstr2b_3C (DOCREF TEXT PRIMARY KEY, GSTIN  TEXT (15) NOT NULL, TRDNAME TEXT (99),SUPFILDT TEXT, SUPPRD TEXT,DOCNUM TEXT, DOCTYPE CHAR, SUPTYP CHAR NOT NULL,DOCDATE TEXT,DOCVALUE DECIMAL (13, 2), POS TEXT(2),REV CHAR(1),ITCAVL CHAR(1),RSN TEXT,DIFFPRCNT  INTEGER,CHCKSUM  TEXT, TAX_VALUE DECIMAL (13, 2), IGST  DECIMAL (13, 2), CGST  DECIMAL (13, 2), SGST  DECIMAL (13, 2), CESS  DECIMAL (13, 2),S_TAXPERIOD TEXT,UPLOAD_DT TEXT,REJ_PST_FIL CHAR (1),MATCH_RESULT TEXT,MATCH_RSN TEXT, FLG CHAR (1),ITC_PERIOD  TEXT NOT NULL,ERROR_CODE TEXT, ERROR_DTL TEXT)",
      "CREATE TABLE IF NOT EXISTS gstr2b_3CA (DOCREF TEXT PRIMARY KEY, GSTIN  TEXT (15) NOT NULL, TRDNAME TEXT (99),SUPFILDT TEXT, SUPPRD TEXT,ONTTYP CHAR,ONTNUM TEXT,ONTDT TEXT,DOCNUM TEXT, DOCTYPE CHAR, SUPTYP CHAR NOT NULL,DOCDATE TEXT,DOCVALUE DECIMAL (13, 2), POS TEXT(2),REV CHAR(1),ITCAVL CHAR(1),RSN TEXT,DIFFPRCNT  INTEGER,CHCKSUM  TEXT, TAX_VALUE DECIMAL (13, 2), IGST  DECIMAL (13, 2), CGST  DECIMAL (13, 2), SGST  DECIMAL (13, 2), CESS  DECIMAL (13, 2),S_TAXPERIOD TEXT,UPLOAD_DT TEXT,REJ_PST_FIL CHAR (1),MATCH_RESULT TEXT,MATCH_RSN TEXT,FLG CHAR (1),ITC_PERIOD  TEXT NOT NULL,ERROR_CODE TEXT, ERROR_DTL TEXT)",
      "CREATE TABLE IF NOT EXISTS MR_DETL (DOCREF TEXT,GSTIN TEXT, LGL_TRDNAME TEXT, DOC_TYPE CHAR(2),DOC_NUM TEXT, DOC_DATE DATE,DOCVALUE DECIMAL (13, 2),TAXABLE_VALUE INTEGER, TAX_AMOUNT INTEGER, CGST INTEGER, IGST INTEGER, SGST INTEGER, CESS INTEGER, ITC CHAR(5), REASON TEXT, FIN_PRD TEXT, FIN_YR TEXT, TABLE_NAME CHAR(8),MATCH_TYPE CHAR(8),RECORD_TYPE CHAR(5),FIELD_MATCH TEXT,REV CHAR(5),ITCAVL CHAR(5),RSN TEXT,AMENDED CHAR(5),FIELD_REFINE_MATCH TEXT,MATCH_TYPE_REFINE CHAR(8),MATCH_NUMBER INTEGER, PRIMARY KEY (DOCREF,GSTIN,DOC_TYPE,DOC_NUM,DOC_DATE,FIN_PRD,FIN_YR,RECORD_TYPE,MATCH_TYPE))"


    ],
    desc: "use this when moving from v1.0 to v1.1 version"
  },
  "v002": {
    offlinedb: [
      "CREATE TABLE IF NOT EXISTS NEW_OFFLINE_FOR_TEST11 (GSTIN TEXT PRIMARY KEY  NOT NULL,LGL_TRDNAME TEXT )",
      "CREATE TABLE IF NOT EXISTS NEW_OFFLINE_FOR_TEST22 (GSTIN TEXT PRIMARY KEY  NOT NULL,LGL_TRDNAME TEXT )"
    ],
    gstindb: [
      "CREATE TABLE IF NOT EXISTS NEW_TABLE_FOR_TEST11 (GSTIN TEXT PRIMARY KEY  NOT NULL,LGL_TRDNAME TEXT )",
      "CREATE TABLE IF NOT EXISTS NEW_TABLE_FOR_TEST22 (GSTIN TEXT PRIMARY KEY  NOT NULL,LGL_TRDNAME TEXT )",
      "ALTER TABLE gstr2b_3B ADD SRCTYP TEXT",
      "ALTER TABLE gstr2b_3B ADD IRN TEXT",
      "ALTER TABLE gstr2b_3B ADD IRNGENDATE TEXT",
      "ALTER TABLE gstr2b_3C ADD SRCTYP TEXT",
      "ALTER TABLE gstr2b_3C ADD IRN TEXT",
      "ALTER TABLE gstr2b_3C ADD IRNGENDATE TEXT"
    ],
    desc: "this is sample - use this when moving from v1.0 to v1.1 version"
  },
   "v003": {
    offlinedb: [],
    gstindb: [],
    desc: "use this when moving from v2.0 to v1.4 version"
  }

};

const insertUserProfile_v01 = {
  query: "INSERT INTO USER_PROFILE (GSTIN, LGL_TRDNAME, ISSEZDEV, FILING_FREQUENCY, FP, TAX_PERIOD, ISACTIVE, MTCHNG_RSLT_AVBL) VALUES (?,?,?,?,?,?,?,'Y')",
  param: ["GSTIN", "LGL_TRDNAME", "ISSEZDEV", "FILING_FREQUENCY", "FP", "TAX_PERIOD", "ISACTIVE"]
}
const insertGstinMaster_v01 = {
  query: "INSERT INTO GSTIN_MASTER (GSTIN, LGL_TRDNAME) VALUES (?,?)",
  param: ["GSTIN", "LGL_TRDNAME"]
}


const RESTORE_GRAPH = {
  "v1.0": {
    upgradableArr: ["v1.1","v1.2","v2.0"],
    "v1.1": {
      offlinedb: [...vScript["v001"].offlinedb],
      gstindb: [...vScript["v001"].gstindb],
      userProfile: [insertUserProfile_v01, insertGstinMaster_v01]
    },
    "v1.2": {
      offlinedb: [...vScript["v001"].offlinedb, ...vScript["v002"].offlinedb],
      gstindb: [...vScript["v001"].gstindb, ...vScript["v002"].gstindb],
      userProfile: [insertUserProfile_v01, insertGstinMaster_v01]
    },
    "v2.0": {
      offlinedb: [...vScript["v001"].offlinedb, ...vScript["v002"].offlinedb, ...vScript["v003"].offlinedb],
      gstindb: [...vScript["v001"].gstindb, ...vScript["v002"].gstindb, ...vScript["v003"].gstindb],
      userProfile: [insertUserProfile_v01, insertGstinMaster_v01]
    },

  },
   "v1.1": {
    upgradableArr: ["v1.2","1.3"],
    "v1.2": {
      offlinedb: [...vScript["v002"].offlinedb],
      gstindb: [...vScript["v002"].gstindb],
      userProfile: [insertUserProfile_v01, insertGstinMaster_v01]
    },
    "v2.0": {
      offlinedb: [...vScript["v002"].offlinedb, ...vScript["v003"].offlinedb],
      gstindb: [...vScript["v002"].gstindb, ...vScript["v003"].gstindb],
      userProfile: [insertUserProfile_v01, insertGstinMaster_v01]
    },
   },
  "v1.2": {
    upgradableArr: ["v2.0"],
    "v2.0": {
      offlinedb: [...vScript["v003"].offlinedb],
      gstindb: [...vScript["v003"].gstindb],
      userProfile: [insertUserProfile_v01, insertGstinMaster_v01]
    },
    
  }
};

module.exports = {
  vScript: vScript,
  VERSION_HISTORY: VERSION_HISTORY,
  RESTORE_GRAPH: RESTORE_GRAPH
}