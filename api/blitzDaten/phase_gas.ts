
export default ` /* Version: 10.3.1.3657.xr */
/* "05-Aug-2020 09:34:33" */

SCHEMA
 user="FLAMBRIGGE" time=1596611920/* "05-Aug-2020 09:18:40" */
{
  VERSION=1253152407/* "17-Sep-2009 03:53:27" */
  MAJOR_VERSION=10
  MINOR_VERSION=3
  MAINTENANCE_VERSION=1
  BUILD_VERSION=3664
  BUILD_ID="xr"
  VERSION_STR="10.3.1.3664.xr"
  ONLINE_UPGRADE=F
}
LOCALE
 user="FLAMBRIGGE" time=1596611920/* "05-Aug-2020 09:18:40" */
{
  LOCALE="English_United States.1252"
}

/* FUNCTION BLOCK(S) USING:"__50D06392_5DC877E5__"
*/



FUNCTION_BLOCK_DEFINITION NAME="__50D06392_5DC877E5__" CATEGORY=""
 user="ADMINISTRATOR" time=1355834274/* "18-Dec-2012 13:37:54" */
{
  SFC_ALGORITHM
  {
    STEP NAME="AC_S1"
    {
      RECTANGLE= { X=200 Y=1490 H=25 W=100 }
    }
    STEP NAME="AC_S2"
    {
      RECTANGLE= { X=200 Y=1610 H=25 W=100 }
    }
    STEP NAME="AC_S3"
    {
      RECTANGLE= { X=470 Y=1610 H=25 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: SFC wiederholen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch' THEN
'^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := ""Aktionen nicht alle ausgeführt, EMR rufen ! "";
'^/IP_FRAGE_TEXT.CV' := ""Sequenz wiederholen ? "";
'^/IP_FRAGE_JA.CV' := 1;
'^/IP_FRAGE_NEIN.CV' := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Sequenz wiederholen quittiert"";
'^/IP_TR1_T' := ('^/IP_FRAGE_JA.CV' =0);
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV'    := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="AC_S4"
    {
      RECTANGLE= { X=470 Y=1730 H=25 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' > 0 AND '^/OWNER.CV' != '$phase_owner_id:External' THEN
'^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV' := 0;
'^/IP_FRAGE_NEIN.CV' := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV'    := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S1"
    {
      DESCRIPTION="Reset 1"
      RECTANGLE= { X=200 Y=40 H=40 W=100 }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  := "" "";
'^/IP_FRAGE_JA.CV'       := 0;
'^/IP_FRAGE_NEIN.CV'   := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="RESET_IP_AC"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_AC.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S1/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S16"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=210 Y=1250 H=20 W=80 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S2"
    {
      DESCRIPTION="SUB GRAFIK ERSTELLEN"
      RECTANGLE= { X=190 Y=200 H=20 W=120 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;
'^/IP_S_T11.CV' := "" "";
'^/IP_TR11_T' := 0;
'^/IP_S_T12.CV'    := "" "";
'^/IP_TR12_T' := 0;
'^/IP_S_T13.CV'    := "" "";
'^/IP_TR13_T' := 0;
'^/IP_S_T14.CV' := "" "";
'^/IP_TR14_T' := 0;
'^/IP_S_T15.CV' := "" "";
'^/IP_TR15_T' := 0;"
      }
    }
    STEP NAME="S3"
    {
      DESCRIPTION="Dummy"
      RECTANGLE= { X=200 Y=1000 H=20 W=100 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S33"
    {
      DESCRIPTION="Transf Ende"
      RECTANGLE= { X=210 Y=750 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="FC Reset"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AH'         := 999999;
'^/DY_E_FC_AHH'      := 999999;
'//#_HOLD#/FCAHH_AKT.CV'  := 0"
        DELAY_TIME=0
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S33/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S33/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S34"
    {
      DESCRIPTION="Regler+Weg Aus"
      RECTANGLE= { X=200 Y=620 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#PC0020B#/B/SW_ROUT.CV'       := 0;
'//#PC0020B#/B/A/MODE.TARGET' := ROUT;
'//#PC0020B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="FC1705  ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1705#/B/SW_ROUT.CV'       := 0;
'//#FC1705#/B/A/MODE.TARGET' := ROUT;
'//#FC1705#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        DESCRIPTION="FC1725 ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1725#/B/SW_ROUT.CV'       := 0;
'//#FC1725#/B/A/MODE.TARGET' := ROUT;
'//#FC1725#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A5"
      {
        DESCRIPTION="TC0030B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#TC0030B#/B/SW_ROUT.CV'       := 0;
'//#TC0030B#/B/A/MODE.TARGET' := ROUT;
'//#TC0030B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        DESCRIPTION="Empfang Weg V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V1_MODE_F'     := CAS;
'^/DY_E_V1_MODE_T'     := CAS;
'^/DY_E_V1_CAS2_FRE'  := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A7"
      {
        DESCRIPTION="Empfang Weg V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V2_MODE_F'     := CAS;
'^/DY_E_V2_MODE_T'     := CAS;
'^/DY_E_V2_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A8"
      {
        DESCRIPTION="Empfang Weg V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V3_MODE_F'     := CAS; 
'^/DY_E_V3_MODE_T'     := CAS;
'^/DY_E_V3_CAS2_FRE'  := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A9"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_SW_CAS2' := 0;
'^/DY_E_VF_MODE_F'     := CAS;
'^/DY_E_VF_MODE_T'     := CAS;
'^/DY_E_VF_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A11"
      {
        DESCRIPTION="Reaktionszeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=   ""Ventil"" + '/+/ST_E_V1' + "" geschlossen"";
'^/IP_TR1_T' := ('^/DY_E_V1_GESCHL' = 1  OR '^/DY_E_V1.IGN' = 1);

'^/IP_S_T2.CV'    :=  ""Ventil"" + '/+/ST_E_V2'  + "" geschlossen"";
'^/IP_TR2_T' := ('^/DY_E_V2_GESCHL' = 1  OR '^/DY_E_V2.IGN' = 1 );

'^/IP_S_T3.CV'    :=  ""Ventil"" + '/+/ST_E_V3'  + "" geschlossen"";
'^/IP_TR3_T' := ('^/DY_E_V3_GESCHL' = 1  OR '^/DY_E_V3.IGN' = 1);

'^/IP_S_T4.CV'    :=  ""Ventil"" + '/+/ST_E_VF'  + "" geschlossen"";
'^/IP_TR4_T' := ('^/DY_E_VF_GESCHL' = 1  OR '^/DY_E_VF.IGN' = 1 );

'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S34/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A4/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A6/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A7/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A8/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A9/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A11/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S34/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S4"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=200 Y=1130 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Upload Report Values"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
      '^/REQUEST.CV' := 2000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/DY_E_FQ.IGN' = 0 THEN
  '//#UM#/GAS_FQ.CV' := '^/DY_E_FQ_X';
  '^/RP_FQ.CV' := '^/DY_E_FQ_X';
ELSE
  '//#UM#/GAS_FQ.CV' := 0;
  '^/RP_FQ.CV' := 0;
END_IF"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S4/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S4/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S4/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S5"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=360 Y=1130 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Upload Report Values"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
      '^/REQUEST.CV' := 2000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#UM#/GAS_FQ.CV' := 0;
  '^/RP_FQ.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S5/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S5/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S5/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S53"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=210 Y=320 H=20 W=80 }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL'                               := -999999;"
        DELAY_TIME=0
      }
      ACTION NAME="A10"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="A13"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 0;
'^/TASTE_1_AKTIV.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S53/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A10/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A13/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S54"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=420 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S54/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S54/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S55"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=420 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FC_SCHL_RAMPE.CV' :=  ( 100  * '^/IP_ZYKLUS_ZEIT.CV' )  / '^/FP_FC_SCHLIESS_Z.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := '^/DY_E_FC_BKCAL_IN';
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       :=  '/+/DY_E_FC_SW_ROUT.CV'    - '^/IP_FC_SCHL_RAMPE.CV';"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Ausgang Regler "" + '^/ST_E_FC.CV' + "" <= 0 : "" + '^/DY_E_FC_SW_ROUT' + "" <= 0"" ;
'^/IP_TR1_T.CV' :=  ( '^/DY_E_FC_SW_ROUT' <= 0 ) ;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S55/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S55/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S55/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S56"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=510 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S56/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S56/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S69"
    {
      DESCRIPTION="Sub Grafik löschen"
      RECTANGLE= { X=200 Y=880 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_GASST'  := """";"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_W_STATUS' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S69/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S69/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S69/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    INITIAL_STEP="S1"
    TRANSITION NAME="AC_T1"
    {
      POSITION= { X=240 Y=1550 }
      TERMINATION=F
      EXPRESSION="'^/IP_AC.CV' = 0"
    }
    TRANSITION NAME="AC_T2"
    {
      POSITION= { X=510 Y=1550 }
      TERMINATION=F
      EXPRESSION="'^/IP_AC.CV' = 1"
    }
    TRANSITION NAME="AC_T3"
    {
      DESCRIPTION="Ende"
      POSITION= { X=240 Y=1790 }
      TERMINATION=T
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="AC_T4"
    {
      POSITION= { X=510 Y=1670 }
      TERMINATION=F
      EXPRESSION="'^/IP_FRAGE_JA.CV' = 0"
    }
    TRANSITION NAME="AC_T5"
    {
      POSITION= { X=510 Y=1790 }
      TERMINATION=F
      EXPRESSION="'^/REQUEST.CV' = 0 OR
'^/OWNER.CV' = '$phase_owner_id:External'"
    }
    TRANSITION NAME="T1"
    {
      POSITION= { X=240 Y=150 }
      TERMINATION=F
      EXPRESSION="('^/FLAG_DYN_REF_OK.CV' = 1)
AND
(('S1/TEXT/STATE.CV' = '$sfc_action_states:Complete') OR 'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T2"
    {
      POSITION= { X=640 Y=140 }
      TERMINATION=F
      EXPRESSION="(('S1/TEXT/STATE.CV' = '$sfc_action_states:Complete') OR 'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T22"
    {
      DESCRIPTION="Ende"
      POSITION= { X=240 Y=1310 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T3"
    {
      POSITION= { X=240 Y=250 }
      TERMINATION=F
      EXPRESSION="'^/IP_FP_OK.CV' = 1"
    }
    TRANSITION NAME="T4"
    {
      POSITION= { X=550 Y=260 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T42"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=240 Y=680 }
      TERMINATION=F
      EXPRESSION="(('^/DY_E_V1_GESCHL' = 1 OR '^/DY_E_V1.IGN' = 1) AND 
('^/DY_E_V2_GESCHL' = 1 OR '^/DY_E_V2.IGN' = 1) AND  
('^/DY_E_V3_GESCHL' = 1 OR '^/DY_E_V3.IGN' = 1) AND 
('^/DY_E_VF_GESCHL' = 1 OR '^/DY_E_VF.IGN' = 1))
AND
(('S34/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A9/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A11/STATE.CV' = '$sfc_action_states:Complete') OR 'S34/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T45"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=800 }
      TERMINATION=F
      EXPRESSION="(('S33/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S33/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T5"
    {
      POSITION= { X=240 Y=1070 }
      TERMINATION=F
      EXPRESSION="'^/FLAG_FQ_RESET.CV' = 1"
    }
    TRANSITION NAME="T6"
    {
      DESCRIPTION="OK"
      POSITION= { X=400 Y=1080 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T68"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=240 Y=380 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' = 0)
AND
(('S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete') OR 'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T69"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=360 Y=380 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' > 0)
AND
(('S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete') OR 'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T7"
    {
      POSITION= { X=240 Y=1170 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0
OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
(('S4/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S4/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S4/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T70"
    {
      POSITION= { X=240 Y=470 }
      TERMINATION=F
      EXPRESSION="(('S54/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S54/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T71"
    {
      POSITION= { X=360 Y=470 }
      TERMINATION=F
      EXPRESSION="('^/DY_E_FC_SW_ROUT' <= 0)
AND
(('S55/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S55/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S55/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T72"
    {
      POSITION= { X=360 Y=550 }
      TERMINATION=F
      EXPRESSION="(('S56/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S56/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T8"
    {
      POSITION= { X=400 Y=1170 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0
OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
(('S5/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S5/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S5/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T91"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=940 }
      TERMINATION=F
      EXPRESSION="(('S69/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S69/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S69/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    STEP_TRANSITION_CONNECTION STEP="AC_S1" TRANSITION="AC_T1" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S1" TRANSITION="AC_T2" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S2" TRANSITION="AC_T3" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S3" TRANSITION="AC_T4" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S4" TRANSITION="AC_T5" { }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T1" { }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T2" { }
    STEP_TRANSITION_CONNECTION STEP="S16" TRANSITION="T22" { }
    STEP_TRANSITION_CONNECTION STEP="S2" TRANSITION="T3" { }
    STEP_TRANSITION_CONNECTION STEP="S2" TRANSITION="T4" { }
    STEP_TRANSITION_CONNECTION STEP="S3" TRANSITION="T5" { }
    STEP_TRANSITION_CONNECTION STEP="S3" TRANSITION="T6" { }
    STEP_TRANSITION_CONNECTION STEP="S33" TRANSITION="T45" { }
    STEP_TRANSITION_CONNECTION STEP="S34" TRANSITION="T42" { }
    STEP_TRANSITION_CONNECTION STEP="S4" TRANSITION="T7" { }
    STEP_TRANSITION_CONNECTION STEP="S5" TRANSITION="T8" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T69" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T68" { }
    STEP_TRANSITION_CONNECTION STEP="S54" TRANSITION="T70" { }
    STEP_TRANSITION_CONNECTION STEP="S55" TRANSITION="T71" { }
    STEP_TRANSITION_CONNECTION STEP="S56" TRANSITION="T72" { }
    STEP_TRANSITION_CONNECTION STEP="S69" TRANSITION="T91" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T1" STEP="AC_S2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T2" STEP="AC_S3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T4" STEP="AC_S4" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T5" STEP="S1" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=100 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="S2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T2" STEP="S69" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T22" STEP="AC_S1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T3" STEP="S53" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T4" STEP="S33" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T42" STEP="S33" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T45" STEP="S69" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T5" STEP="S4" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T6" STEP="S5" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T68" STEP="S54" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T69" STEP="S55" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T7" STEP="S16" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T70" STEP="S34" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T71" STEP="S56" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T72" STEP="S34" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T8" STEP="S16" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T91" STEP="S3" { }
  }
  ATTRIBUTE_INSTANCE NAME="AUTO_ADVANCE"
  {
    VALUE { CV=T }
  }
  ATTRIBUTE_INSTANCE NAME="COMMAND"
  {
    VALUE
    {
      SET="$sfc_commands"
      STRING_VALUE="Start Sequence"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="CONFIRM_FAIL"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="ERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="INITIAL_STATE"
  {
    VALUE
    {
      SET="$sfc_initial_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="RERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="STATE"
  {
    VALUE
    {
      SET="$sfc_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="STATUS"
  {
    VALUE
    {
      ENUM_SET="$module_status_opts"
    }
  }
  ATTRIBUTE_INSTANCE NAME="TIME"
  {
    VALUE { CV=0 }
  }
}
FUNCTION_BLOCK_TEMPLATE NAME="BFI"
 user="hawkbuild" time=1099977249/* "09-Nov-2004 06:14:09" */
{
  DESCRIPTION="Boolean Fan In"
}
FUNCTION_BLOCK_TEMPLATE NAME="CALC"
 user="hawkbuild" time=1099977249/* "09-Nov-2004 06:14:09" */
{
  DESCRIPTION="Calc/Logic"
}
FUNCTION_BLOCK_TEMPLATE NAME="RET"
 user="hawkbuild" time=1099977254/* "09-Nov-2004 06:14:14" */
{
  DESCRIPTION="Retentive Timer"
}
FUNCTION_BLOCK_TEMPLATE NAME="CND"
 user="hawkbuild" time=1099977249/* "09-Nov-2004 06:14:09" */
{
  DESCRIPTION="Condition"
}
FUNCTION_BLOCK_TEMPLATE NAME="NOT"
 user="hawkbuild" time=1099977253/* "09-Nov-2004 06:14:13" */
{
  DESCRIPTION="Not"
}
FUNCTION_BLOCK_TEMPLATE NAME="OR"
 user="hawkbuild" time=1099977253/* "09-Nov-2004 06:14:13" */
{
  DESCRIPTION="Or"
}
FUNCTION_BLOCK_TEMPLATE NAME="RS"
 user="hawkbuild" time=1099977254/* "09-Nov-2004 06:14:14" */
{
  DESCRIPTION="RS Flip-Flop"
}

/* FUNCTION BLOCK(S) USING:"__592D411E_D935159F__"
*/



FUNCTION_BLOCK_DEFINITION NAME="__592D411E_D935159F__" CATEGORY=""
 user="ADMINISTRATOR" time=1496138032/* "30-May-2017 11:53:52" */
{
  FUNCTION_BLOCK NAME="WD_STATE" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=181875633
    RECTANGLE= { X=550 Y=200 H=56 W=140 }
  }
  FUNCTION_BLOCK NAME="HO_UNIT" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=451568837
    RECTANGLE= { X=50 Y=100 H=56 W=90 }
  }
  FUNCTION_BLOCK NAME="BFI1" DEFINITION="BFI"
  {
    DESCRIPTION="Boolean Fan In"
    ID=2465440
    RECTANGLE= { X=290 Y=80 H=96 W=140 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN_D"  COUNT=2 }
  }
  FUNCTION_BLOCK NAME="BLOCK1" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=451568774
    RECTANGLE= { X=550 Y=100 H=76 W=140 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=2 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=2 }
  }
  FUNCTION_BLOCK NAME="CALC1" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=7900171
    RECTANGLE= { X=190 Y=260 H=56 W=80 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=1 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=0 }
  }
  FUNCTION_BLOCK NAME="UNTBR_CND1" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=464469387
    RECTANGLE= { X=40 Y=470 H=76 W=90 }
    ADDITIONAL_CONNECTOR NAME="DISABLE" TYPE=OUTPUT { ATTRIBUTE="DISABLE" }
  }
  FUNCTION_BLOCK NAME="UNTBR_CND2" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=464469435
    RECTANGLE= { X=40 Y=560 H=76 W=90 }
    ADDITIONAL_CONNECTOR NAME="DISABLE" TYPE=OUTPUT { ATTRIBUTE="DISABLE" }
  }
  FUNCTION_BLOCK NAME="UNTBR_CND3" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=464469483
    RECTANGLE= { X=40 Y=650 H=76 W=90 }
    ADDITIONAL_CONNECTOR NAME="DISABLE" TYPE=OUTPUT { ATTRIBUTE="DISABLE" }
  }
  FUNCTION_BLOCK NAME="UNTBR_CND4" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=464469515
    RECTANGLE= { X=40 Y=740 H=76 W=90 }
    ADDITIONAL_CONNECTOR NAME="DISABLE" TYPE=OUTPUT { ATTRIBUTE="DISABLE" }
  }
  FUNCTION_BLOCK NAME="UNTBR_CND5" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=54472298
    RECTANGLE= { X=40 Y=830 H=76 W=90 }
    ADDITIONAL_CONNECTOR NAME="DISABLE" TYPE=OUTPUT { ATTRIBUTE="DISABLE" }
  }
  FUNCTION_BLOCK NAME="UNTBR_CND6" DEFINITION="CND"
  {
    DESCRIPTION="Condition"
    ID=54477144
    RECTANGLE= { X=40 Y=919 H=76 W=90 }
    ADDITIONAL_CONNECTOR NAME="DISABLE" TYPE=OUTPUT { ATTRIBUTE="DISABLE" }
  }
  FUNCTION_BLOCK NAME="UNTERB" DEFINITION="BFI"
  {
    DESCRIPTION="Boolean Fan In"
    ID=464469339
    RECTANGLE= { X=480 Y=450 H=136 W=120 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN_D"  COUNT=6 }
    ADDITIONAL_CONNECTOR NAME="ARM_TRAP" TYPE=INPUT { ATTRIBUTE="ARM_TRAP" }
  }
  FUNCTION_BLOCK NAME="OR1" DEFINITION="OR"
  {
    DESCRIPTION="Or"
    ID=464469579
    RECTANGLE= { X=480 Y=670 H=116 W=120 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN_D"  COUNT=6 }
  }
  FUNCTION_BLOCK NAME="NOT2" DEFINITION="NOT"
  {
    DESCRIPTION="Not"
    ID=1021361812
    RECTANGLE= { X=460 Y=850 H=56 W=140 }
  }
  FUNCTION_BLOCK NAME="RS1" DEFINITION="RS"
  {
    DESCRIPTION="RS Flip-Flop"
    ID=1021361813
    RECTANGLE= { X=650 Y=570 H=76 W=140 }
  }
  FUNCTION_BLOCK NAME="NOT1" DEFINITION="NOT"
  {
    DESCRIPTION="Not"
    ID=1021361814
    RECTANGLE= { X=820 Y=570 H=56 W=140 }
  }
  FUNCTION_BLOCK NAME="REAKTIONSZEIT" DEFINITION="RET"
  {
    DESCRIPTION="Retentive Timer"
    ID=44346845
    RECTANGLE= { X=1100 Y=400 H=76 W=140 }
  }
  FUNCTION_BLOCK NAME="FAL_SETZEIT" DEFINITION="RET"
  {
    DESCRIPTION="Retentive Timer"
    ID=47294663
    RECTANGLE= { X=1100 Y=490 H=76 W=140 }
  }
  FUNCTION_BLOCK NAME="DY_E_V1_V2" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=242052204
    RECTANGLE= { X=1180 Y=760 H=36 W=120 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=0 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=0 }
  }
  FUNCTION_BLOCK NAME="DY_E_V3_VF" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=242051889
    RECTANGLE= { X=1180 Y=820 H=36 W=120 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=0 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=0 }
  }
  FUNCTION_BLOCK NAME="DY_E_FQ" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=242052110
    RECTANGLE= { X=1180 Y=880 H=36 W=100 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=0 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=0 }
  }
  FUNCTION_BLOCK NAME="DY_E_FC" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=242052030
    RECTANGLE= { X=1180 Y=940 H=36 W=110 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=0 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=0 }
  }
  FUNCTION_BLOCK NAME="DY_E_GR" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=3608603098
    RECTANGLE= { X=1180 Y=700 H=36 W=80 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=0 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=0 }
  }
  FUNCTION_BLOCK NAME="DY_G" DEFINITION="CALC"
  {
    DESCRIPTION="Calc/Logic"
    ID=244074093
    RECTANGLE= { X=1180 Y=640 H=36 W=80 }
    EXTENSIBLE_ATTRIBUTE { NAME="OUT"  COUNT=0 }
    EXTENSIBLE_ATTRIBUTE { NAME="IN"  COUNT=0 }
  }
  ATTRIBUTE NAME="UNTERB_INT" TYPE=UINT16
  {
    CONNECTION=INTERNAL_SINK
    RECTANGLE= { X=660 Y=470 H=20 W=120 }
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="UNTERBRUCH" TYPE=BOOLEAN
  {
    CONNECTION=INTERNAL_SINK
    RECTANGLE= { X=660 Y=490 H=20 W=120 }
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="UNTERB_ERSTS" TYPE=UINT16
  {
    CONNECTION=INTERNAL_SINK
    RECTANGLE= { X=660 Y=510 H=20 W=120 }
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="UNTERB_BYP" TYPE=BOOLEAN
  {
    CONNECTION=INTERNAL_SINK
    RECTANGLE= { X=660 Y=690 H=20 W=110 }
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="ST_MY_UNIT_NAME" TYPE=EXTERNAL_REFERENCE
  {
    CONNECTION=INTERNAL_SOURCE
    RECTANGLE= { X=1010 Y=700 H=20 W=130 }
    GROUP="Operating"
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="UNTERBR_AKT" TYPE=BOOLEAN
  {
    CONNECTION=INTERNAL_SOURCE
    RECTANGLE= { X=40 Y=1010 H=20 W=120 }
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="IP_AC_DELAY_RUN" TYPE=FLOAT
  {
    CONNECTION=INTERNAL_SOURCE
    RECTANGLE= { X=550 Y=270 H=20 W=140 }
    GROUP="Lonza"
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="IP_AC_DELAY_STEP" TYPE=FLOAT
  {
    CONNECTION=INTERNAL_SOURCE
    RECTANGLE= { X=550 Y=295 H=20 W=140 }
    GROUP="Lonza"
    CATEGORY { CATEGORY=COMMON }
  }
  ATTRIBUTE NAME="IP_AC_DELAY_TR" TYPE=FLOAT
  {
    CONNECTION=INTERNAL_SOURCE
    RECTANGLE= { X=550 Y=320 H=20 W=140 }
    GROUP="Lonza"
    CATEGORY { CATEGORY=COMMON }
  }
  FBD_ALGORITHM
  {
    GRAPHICS ALGORITHM=FBD
    {
      BOX_GRAPHIC
      {
        NAME="{B5D8B542-B08A-11D4-8151-00B0D023E2AE}"
        RECTANGLE= { X=30 Y=370 H=630 W=970 }
        LINE_STYLE=SOLID
        LINE_WIDTH=1
        LINE_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FGD_COLOR= { RED=255 GREEN=255 BLUE=255 }
        BGD_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FILL_PATTERN=""
      }
      TEXT_GRAPHIC
      {
        NAME="{B5D8B545-B08A-11D4-8151-00B0D023E2AE}"
        ORIGIN= { X=42 Y=406 }
        END= { X=132 Y=420 }
        TEXT="Unterbruch Logik
"
      }
      BOX_GRAPHIC
      {
        NAME="{88335E7A-B491-11D4-8152-00B0D023E2AE}"
        RECTANGLE= { X=1010 Y=390 H=200 W=310 }
        LINE_STYLE=SOLID
        LINE_WIDTH=1
        LINE_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FGD_COLOR= { RED=255 GREEN=255 BLUE=255 }
        BGD_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FILL_PATTERN=""
      }
      TEXT_GRAPHIC
      {
        NAME="{88335E7D-B491-11D4-8152-00B0D023E2AE}"
        ORIGIN= { X=1020 Y=396 }
        END= { X=1077 Y=410 }
        TEXT="Timer Modul"
      }
      BOX_GRAPHIC
      {
        NAME="{1ED79BE3-E166-11D4-B89E-00B0D0A12BD4}"
        RECTANGLE= { X=50 Y=240 H=110 W=360 }
        LINE_STYLE=SOLID
        LINE_WIDTH=1
        LINE_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FGD_COLOR= { RED=255 GREEN=255 BLUE=255 }
        BGD_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FILL_PATTERN=""
      }
      TEXT_GRAPHIC
      {
        NAME="{1ED79BE6-E166-11D4-B89E-00B0D0A12BD4}"
        ORIGIN= { X=61 Y=272 }
        END= { X=136 Y=286 }
        TEXT="FCAHH an HOLD
"
      }
      BOX_GRAPHIC
      {
        NAME="{57DEAE5B-A4F9-11D5-81B0-00B0D023E2AE}"
        RECTANGLE= { X=1000 Y=610 H=380 W=328 }
        LINE_STYLE=SOLID
        LINE_WIDTH=1
        LINE_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FGD_COLOR= { RED=255 GREEN=255 BLUE=255 }
        BGD_COLOR= { RED=0 GREEN=0 BLUE=0 }
        FILL_PATTERN=""
      }
      TEXT_GRAPHIC
      {
        NAME="{88334676-B491-11D4-8152-00B0D023E2AE}"
        ORIGIN= { X=1022 Y=621 }
        END= { X=1194 Y=635 }
        TEXT=" Dynamische Referenz bestimmen
"
      }
      TEXT_GRAPHIC
      {
        NAME="41C80B88"
        ORIGIN= { X=39 Y=23 }
        END= { X=180 Y=65 }
        TEXT="GF GAS
Version 7.0
30. Mai. 2017 / M. Demostene"
      }
    }
    WIRE SOURCE="BFI1/OUT_D" DESTINATION="BLOCK1/IN1" { }
    WIRE SOURCE="HO_UNIT/OUT_D" DESTINATION="BFI1/IN_D1" { }
    WIRE SOURCE="OR1/OUT_D" DESTINATION="UNTERB_BYP" { }
    WIRE SOURCE="UNTBR_CND1/DISABLE" DESTINATION="OR1/IN_D1" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=180 } }
    WIRE SOURCE="UNTBR_CND2/DISABLE" DESTINATION="OR1/IN_D2" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=180 } }
    WIRE SOURCE="UNTBR_CND3/DISABLE" DESTINATION="OR1/IN_D3" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=180 } }
    WIRE SOURCE="UNTBR_CND4/DISABLE" DESTINATION="OR1/IN_D4" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=180 } }
    WIRE SOURCE="UNTERB/OUT_INT" DESTINATION="UNTERB_INT" { }
    WIRE SOURCE="UNTERB/OUT_D" DESTINATION="UNTERBRUCH" { }
    WIRE SOURCE="UNTERB/FIRST_OUT" DESTINATION="UNTERB_ERSTS" { }
    WIRE SOURCE="UNTBR_CND5/DISABLE" DESTINATION="OR1/IN_D5" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=180 } }
    WIRE SOURCE="UNTBR_CND6/DISABLE" DESTINATION="OR1/IN_D6" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=180 } }
    WIRE SOURCE="UNTBR_CND1/OUT_D" DESTINATION="UNTERB/IN_D1" { }
    WIRE SOURCE="UNTBR_CND2/OUT_D" DESTINATION="UNTERB/IN_D2" { }
    WIRE SOURCE="UNTBR_CND3/OUT_D" DESTINATION="UNTERB/IN_D3" { }
    WIRE SOURCE="UNTBR_CND4/OUT_D" DESTINATION="UNTERB/IN_D4" { }
    WIRE SOURCE="UNTBR_CND5/OUT_D" DESTINATION="UNTERB/IN_D5" { }
    WIRE SOURCE="UNTBR_CND6/OUT_D" DESTINATION="UNTERB/IN_D6" { }
    WIRE SOURCE="UNTERB/OUT_D" DESTINATION="RS1/SET" { }
    WIRE SOURCE="NOT2/OUT_D" DESTINATION="RS1/RESET_IN" { }
    WIRE SOURCE="UNTERBR_AKT" DESTINATION="NOT2/IN_D" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=370 } }
    WIRE SOURCE="RS1/OUT_D" DESTINATION="NOT1/IN_D" { }
    WIRE SOURCE="NOT1/OUT_D" DESTINATION="UNTERB/ARM_TRAP" { IS_FEEDBACK_WIRE=T SEGMENT { INDEX=4 ORIENTATION=HORIZONTAL ORDINATE=660 } }
  }
  ATTRIBUTE_INSTANCE NAME="UNTERB_INT"
  {
    VALUE { CV=0 }
  }
  ATTRIBUTE_INSTANCE NAME="UNTERBRUCH"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="UNTERB_ERSTS"
  {
    VALUE { CV=0 }
  }
  ATTRIBUTE_INSTANCE NAME="UNTERB_BYP"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="ST_MY_UNIT_NAME"
  {
    VALUE { REF="//#UM#/UM" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTERBR_AKT"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="IP_AC_DELAY_RUN"
  {
    VALUE { CV=5 }
    EXPOSE=F
    EXPOSE_IS_OVERRIDDEN=T
  }
  ATTRIBUTE_INSTANCE NAME="IP_AC_DELAY_STEP"
  {
    VALUE { CV=5 }
    EXPOSE=F
    EXPOSE_IS_OVERRIDDEN=T
  }
  ATTRIBUTE_INSTANCE NAME="IP_AC_DELAY_TR"
  {
    VALUE { CV=6 }
    EXPOSE=F
    EXPOSE_IS_OVERRIDDEN=T
  }
  ATTRIBUTE_INSTANCE NAME="BLOCK1/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/BSTATUS.CV' <> '$phase_state:Holding' THEN

IF ( '^/WD_STATE/OUT_D.CV' ) THEN
  '/+/FAIL_INDEX' := 'phase_failures:PLM Watchdog Failed';
endif;
if ( '/+/SWITCHED_OVER.CV' = TRUE ) then
  '/+/FAIL_INDEX' := 'phase_failures:Controller Switchover Detected';
  '/+/SWITCHED_OVER.CV' := FALSE;
endif;

IF ( IN1 = 1 ) THEN
  '/+/FAIL_INDEX.CV' := 'phase_failures:GF FAILED';
ENDIF

ENDIF" }
  }
  ATTRIBUTE_INSTANCE NAME="CALC1/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/DY_E_FC_AHH_ACT' = 1  THEN
  OUT1 := 1;
  '//#_HOLD#/FCAHH' := 1;
ELSE
  OUT1 := 0;
  '//#_HOLD#/FCAHH' := 0;
END_IF;" }
  }
  ATTRIBUTE_INSTANCE NAME="DY_E_FC/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/FLAG_DYN_REF_BER.CV' = 1 THEN;
  
   REM Erstellen der Dynamischen Strings fuer die Sender Weg Informations Anbindung
   '/+/DY_E_FC.$REF' :=  ""//"" + '^/ST_MY_UNIT_NAME.CV' + ""/GAS_W"" + '/+/FP_WEG.CV' + ""_FC.CV"";
   '/+/ST_E_FC.CV' := '/+/DY_E_FC';

IF '/+/DY_E_FC.IGN' = 0 THEN;
     '/+/DY_E_FC_SW_CAS2.$REF'          := ""//"" + '/+/ST_E_FC.CV' +""/B/SW_CAS2"";
      '/+/DY_E_FC_SW_ROUT.$REF'         := ""//"" + '/+/ST_E_FC.CV' +""/B/SW_ROUT"";
      '/+/DY_E_FC_MODE_F.$REF'            := ""//"" + '/+/ST_E_FC.CV' +""/B/MODE_FREI"";
      '/+/DY_E_FC_MODE.$REF'            := ""//"" + '/+/ST_E_FC.CV' +""/B/A/MODE"";
      '/+/DY_E_FC_CAS2_FRE.$REF'        := ""//"" + '/+/ST_E_FC.CV' +""/B/CAS2_FREI"";
      '/+/DY_E_FC_HSC.$REF'                   := ""//"" + '/+/ST_E_FC.CV' +""/B/A/PV_SCALE.EU100"";
      '/+/DY_E_FC_LSC.$REF'                    := ""//"" + '/+/ST_E_FC.CV' +""/B/A/PV_SCALE.EU0"";
      '/+/DY_E_FC_AL.$REF'                       := ""//"" + '/+/ST_E_FC.CV' +""/B/A/LO_LIM"";
      '/+/DY_E_FC_AH.$REF'                       := ""//"" + '/+/ST_E_FC.CV' +""/B/A/HI_LIM"";
      '/+/DY_E_FC_AHH.$REF'                    := ""//"" + '/+/ST_E_FC.CV' +""/B/A/HI_HI_LIM"";
      '/+/DY_E_FC_AHH_ACT.$REF'           := ""//"" + '/+/ST_E_FC.CV' +""/B/A/HI_HI_ACT"";
      '/+/DY_E_FC_YSH.$REF'                    := ""//"" + '/+/ST_E_FC.CV' +""/B/A/OUT_HI_LIM"";
      '/+/DY_E_FC_X.$REF'                         := ""//"" + '/+/ST_E_FC.CV' +""/B/A/PV"";
      '/+/DY_E_FC_BKCAL_IN.$REF'          :=  ""//"" + '/+/ST_E_FC.CV' +""/B/BKCAL_IN"";

ELSE IF  '/+/DY_E_FC.IGN' = 1 THEN;

   '/+/DY_E_FC_SW_CAS2.$REF'         := """";
   '/+/DY_E_FC_SW_ROUT.$REF'         := """";
   '/+/DY_E_FC_MODE_F.$REF'            := """";
   '/+/DY_E_FC_MODE.$REF'               := """";
   '/+/DY_E_FC_CAS2_FRE.$REF'       := """";
   '/+/DY_E_FC_HSC.$REF'                   := """";
   '/+/DY_E_FC_LSC.$REF'                    := """";
   '/+/DY_E_FC_AL.$REF'                       := """";
   '/+/DY_E_FC_AH.$REF'                       := """";
   '/+/DY_E_FC_AHH.$REF'                    := """";
   '/+/DY_E_FC_AHH_ACT.$REF'           := """";
   '/+/DY_E_FC_YSH.$REF'                     := """";
   '/+/DY_E_FC_X.$REF'                         := """";
   '/+/DY_E_FC_BKCAL_IN.$REF'          :=  """";

ENDIF;
ENDIF;

IF '/+/DY_E_FC.CST'                             = 0 AND
     '/+/DY_E_FC_SW_CAS2.CST'        = 0 AND
   '/+/DY_E_FC_SW_ROUT.CST'        = 0 AND
   '/+/DY_E_FC_MODE_F.CST'           = 0 AND
   '/+/DY_E_FC_MODE.CST'              = 0 AND
   '/+/DY_E_FC_CAS2_FRE.CST'       = 0 AND
   '/+/DY_E_FC_HSC.CST'                   = 0 AND 
   '/+/DY_E_FC_LSC.CST'                    = 0 AND 
   '/+/DY_E_FC_AL.CST'                       = 0 AND
   '/+/DY_E_FC_AH.CST'                       = 0 AND
  '/+/DY_E_FC_AHH.CST'                     = 0 AND 
   '/+/DY_E_FC_AHH_ACT.CST'          = 0 AND 
   '/+/DY_E_FC_YSH.CST'                    = 0 AND 
   '/+/DY_E_FC_X.CST'                         = 0 AND
    '/+/DY_E_FC_BKCAL_IN.CST'          = 0 AND
   ('/+/DY_E_FC_CAS2_FRE' = 0 OR '/+/DY_E_FC_CAS2_FRE' = 1 OR '/+/DY_E_FC.IGN' = 1) THEN

     '/+/IP_DY_E_FC_CST.CV' := 0;
ELSE
      '/+/IP_DY_E_FC_CST.CV' := -1;
ENDIF;

ENDIF;" }
  }
  ATTRIBUTE_INSTANCE NAME="DY_E_FQ/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/FLAG_DYN_REF_BER.CV' = 1 THEN;

   REM Erstellen der Dynamischen Strings fuer die Sender Weg Informations Anbindung
   '/+/DY_E_FQ.$REF' :=  ""//"" +  '^/ST_MY_UNIT_NAME.CV'  + ""/GAS_W"" + '/+/FP_WEG.CV' + ""_FQ.CV"";
   '/+/ST_E_FQ.CV' := '/+/DY_E_FQ';

IF '/+/DY_E_FQ.IGN' = 0 THEN

'/+/DY_E_FQ_SW_CAS2.$REF'         := ""//"" + '/+/DY_E_FQ.CV' +""/B/SW_CAS2"";
'/+/DY_E_FQ_MODE_F.$REF'            := ""//"" + '/+/DY_E_FQ.CV' +""/B/MODE_FREI"";
'/+/DY_E_FQ_MODE_T.$REF'            := ""//"" + '/+/DY_E_FQ.CV' +""/B/MODE.TARGET"";
'/+/DY_E_FQ_CAS2_FRE.$REF'       := ""//"" + '/+/DY_E_FQ.CV' +""/B/CAS2_FREI"";
'/+/DY_E_FQ_RESET.$REF'               := ""//"" + '/+/DY_E_FQ.CV' +""/B/ZAEHL_RESET"";
'/+/DY_E_FQ_EIN.$REF'                      := ""//"" + '/+/DY_E_FQ.CV' +""/B/EIN"";
'/+/DY_E_FQ_VORABSCH.$REF'      := ""//"" + '/+/DY_E_FQ.CV' +""/B/VORABSCH"";
'/+/DY_E_FQ_X.$REF'                          := ""//"" + '/+/DY_E_FQ.CV' +""/B/ZAEHL_STAND"";


ELSE IF  '/+/DY_E_FQ.IGN' = 1 THEN;

'/+/DY_E_FQ_SW_CAS2.$REF'         := """";
'/+/DY_E_FQ_MODE_F.$REF'            := """";
'/+/DY_E_FQ_MODE_T.$REF'            := """";
'/+/DY_E_FQ_CAS2_FRE.$REF'       := """";
'/+/DY_E_FQ_RESET.$REF'               := """";
'/+/DY_E_FQ_EIN.$REF'                      := """";
'/+/DY_E_FQ_VORABSCH.$REF'      := """";
'/+/DY_E_FQ_X.$REF'                          := """";

ENDIF;
ENDIF;

IF '/+/DY_E_FQ.CST'                              = 0 AND
    '/+/DY_E_FQ_SW_CAS2.CST'          = 0 AND
    '/+/DY_E_FQ_MODE_F.CST'             = 0 AND
    '/+/DY_E_FQ_MODE_T.CST'             = 0 AND
    '/+/DY_E_FQ_CAS2_FRE.CST'         = 0 AND
    '/+/DY_E_FQ_RESET.CST'             = 0 AND
    '/+/DY_E_FQ_EIN.CST'                    = 0 AND
    '/+/DY_E_FQ_VORABSCH.CST'    = 0 AND
    '/+/DY_E_FQ_X.CST'                        = 0 AND
    ('/+/DY_E_FQ_CAS2_FRE' = 0 OR '/+/DY_E_FQ_CAS2_FRE' = 1 OR '/+/DY_E_FQ.IGN' = 1) THEN ;

     '/+/IP_DY_E_FQ_CST.CV' := 0;
ELSE
      '/+/IP_DY_E_FQ_CST.CV' := -1;
ENDIF;

ENDIF;" }
  }
  ATTRIBUTE_INSTANCE NAME="DY_E_GR/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/FLAG_DYN_REF_BER.CV' = 1 THEN;

    '/+/DY_GR_G_W_STATUS.$REF'  :=  ""//"" + '^/ST_MY_UNIT_NAME.CV' + ""/GR_G_W"" + '/+/FP_WEG.CV' + ""_STATUS"";

IF '/+/FP_GASST.CV' > 0  THEN

    '/+/DY_GR_G_GASST.$REF'  := ""//"" + '^/ST_MY_UNIT_NAME.CV'  + ""/GR_G_W"" + '/+/FP_WEG.CV' + ""_GASST"";



ELSE
    '/+/DY_GR_G_GASST.$REF'  := """";


END_IF;


IF '/+/DY_GR_G_GASST.CST' = 0 AND
    '/+/DY_GR_G_W_STATUS.CST' = 0 THEN
     
    '/+/IP_DY_E_CST.CV' := 0;

ELSE
     '/+/IP_DY_E_CST.CV' := -1;

ENDIF;

ENDIF;" }
  }
  ATTRIBUTE_INSTANCE NAME="DY_E_V1_V2/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/FLAG_DYN_REF_BER.CV' = 1 THEN;
    REM Erstellen der Dynamischen Strings fuer die Sender Weg Informations Anbindung
   '/+/DY_E_V1.$REF' :=  ""//"" + '^/ST_MY_UNIT_NAME.CV' + ""/GAS_W"" + '/+/FP_WEG.CV' + ""_V_1.CV"";
   '/+/ST_E_V1.CV' := '/+/DY_E_V1';

IF '/+/DY_E_V1.IGN' = 0 THEN

'/+/DY_E_V1_SW_CAS2.$REF'   := ""//"" +  '/+/DY_E_V1' +""/B/SW_CAS2"";
'/+/DY_E_V1_OFFEN.$REF'        := ""//"" +  '/+/DY_E_V1' +""/B/OFFEN"";
'/+/DY_E_V1_GESCHL.$REF'     := ""//"" +  '/+/DY_E_V1' +""/B/GESCHL"";
'/+/DY_E_V1_MODE_F.$REF'     := ""//"" +  '/+/DY_E_V1' +""/B/MODE_FREI"";
'/+/DY_E_V1_MODE_T.$REF'     := ""//"" +  '/+/DY_E_V1' +""/B/D/MODE.TARGET"";
'/+/DY_E_V1_CAS2_FRE.$REF' := ""//"" +  '/+/DY_E_V1' +""/B/CAS2_FREI"";

ELSE IF  '/+/DY_E_V1.IGN' = 1 THEN;

'/+/DY_E_V1_SW_CAS2.$REF'    := """";
'/+/DY_E_V1_OFFEN.$REF'          := """";
'/+/DY_E_V1_GESCHL.$REF'       := """";
'/+/DY_E_V1_MODE_F.$REF'       := """";
'/+/DY_E_V1_MODE_T.$REF'       := """";
'/+/DY_E_V1_CAS2_FRE.$REF'   := """";

ENDIF;
ENDIF;

IF '/+/DY_E_V1.CST'                      = 0 AND
    '/+/DY_E_V1_SW_CAS2.CST'  = 0 AND
    '/+/DY_E_V1_OFFEN.CST'        = 0 AND
    '/+/DY_E_V1_GESCHL.CST'     = 0 AND
    '/+/DY_E_V1_MODE_F.CST'     = 0 AND
    '/+/DY_E_V1_MODE_T.CST'     = 0 AND
    '/+/DY_E_V1_CAS2_FRE.CST' = 0  AND 
    ('/+/DY_E_V1_GESCHL' = 0 OR '/+/DY_E_V1_GESCHL' = 1 OR '/+/DY_E_V1.IGN' = 1) THEN;

     '/+/IP_DY_E_V_1_CST.CV' := 0;
ELSE
      '/+/IP_DY_E_V_1_CST.CV' := -1;
ENDIF;


  
   REM Erstellen der Dynamischen Strings fuer die Sender Weg Informations Anbindung
   '/+/DY_E_V2.$REF' :=  ""//"" +'^/ST_MY_UNIT_NAME.CV' + ""/GAS_W"" + '/+/FP_WEG.CV' + ""_V_2.CV"";
   '/+/ST_E_V2.CV' := '/+/DY_E_V2';

IF '/+/DY_E_V2.IGN' = 0 THEN

'/+/DY_E_V2_SW_CAS2.$REF'   := ""//"" +  '/+/DY_E_V2' +""/B/SW_CAS2"";
'/+/DY_E_V2_OFFEN.$REF'         := ""//"" +  '/+/DY_E_V2' +""/B/OFFEN"";
'/+/DY_E_V2_GESCHL.$REF'     := ""//"" +  '/+/DY_E_V2' +""/B/GESCHL"";
'/+/DY_E_V2_MODE_F.$REF'     := ""//"" +  '/+/DY_E_V2' +""/B/MODE_FREI"";
'/+/DY_E_V2_MODE_T.$REF'     := ""//"" +  '/+/DY_E_V2' +""/B/D/MODE.TARGET"";
'/+/DY_E_V2_CAS2_FRE.$REF'  :=""//"" +  '/+/DY_E_V2' +""/B/CAS2_FREI"";

ELSE IF  '/+/DY_E_V2.IGN' = 1 THEN;

'/+/DY_E_V2_SW_CAS2.$REF'    := """";
'/+/DY_E_V2_OFFEN.$REF'          := """";
'/+/DY_E_V2_GESCHL.$REF'       := """";
'/+/DY_E_V2_MODE_F.$REF'       := """";
'/+/DY_E_V2_MODE_T.$REF'       := """";
'/+/DY_E_V2_CAS2_FRE.$REF'   := """";

ENDIF;
ENDIF;

IF '/+/DY_E_V2.CST'                      = 0 AND
    '/+/DY_E_V2_SW_CAS2.CST'  = 0 AND
    '/+/DY_E_V2_OFFEN.CST'        = 0 AND
    '/+/DY_E_V2_GESCHL.CST'     = 0 AND
    '/+/DY_E_V2_MODE_F.CST'     = 0 AND
    '/+/DY_E_V2_MODE_T.CST'     = 0 AND
    '/+/DY_E_V2_CAS2_FRE.CST' = 0 AND 
    ('/+/DY_E_V2_GESCHL' = 0 OR '/+/DY_E_V2_GESCHL' = 1 OR '/+/DY_E_V2.IGN' = 1) THEN;

     '/+/IP_DY_E_V_2_CST.CV' := 0;
ELSE
      '/+/IP_DY_E_V_2_CST.CV' := -1;
ENDIF;

ENDIF;" }
  }
  ATTRIBUTE_INSTANCE NAME="DY_E_V3_VF/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/FLAG_DYN_REF_BER.CV' = 1 THEN;
  
   REM Erstellen der Dynamischen Strings fuer die Sender Weg Informations Anbindung
   '/+/DY_E_V3.$REF' :=  ""//"" + '^/ST_MY_UNIT_NAME.CV' + ""/GAS_W"" + '/+/FP_WEG.CV' + ""_V_3.CV"";
   '/+/ST_E_V3.CV' := '/+/DY_E_V3';

IF '/+/DY_E_V3.IGN' = 0 THEN

'/+/DY_E_V3_SW_CAS2.$REF'   := ""//"" +  '/+/DY_E_V3' +""/B/SW_CAS2"";
'/+/DY_E_V3_OFFEN.$REF'        := ""//"" +  '/+/DY_E_V3' +""/B/OFFEN"";
'/+/DY_E_V3_GESCHL.$REF'     := ""//"" +  '/+/DY_E_V3' +""/B/GESCHL"";
'/+/DY_E_V3_MODE_F.$REF'     := ""//"" +  '/+/DY_E_V3' +""/B/MODE_FREI"";
'/+/DY_E_V3_MODE_T.$REF'     := ""//"" +  '/+/DY_E_V3' +""/B/D/MODE.TARGET"";
'/+/DY_E_V3_CAS2_FRE.$REF' := ""//"" +  '/+/DY_E_V3' +""/B/CAS2_FREI"";

ELSE IF  '/+/DY_E_V3.IGN' = 1 THEN;

'/+/DY_E_V3_SW_CAS2.$REF'    := """";
'/+/DY_E_V3_OFFEN.$REF'          := """";
'/+/DY_E_V3_GESCHL.$REF'       := """";
'/+/DY_E_V3_MODE_F.$REF'       := """";
'/+/DY_E_V3_MODE_T.$REF'       := """";
'/+/DY_E_V3_CAS2_FRE.$REF'   := """";

ENDIF;
ENDIF;

IF '/+/DY_E_V3.CST'                      = 0 AND
    '/+/DY_E_V3_SW_CAS2.CST'  = 0 AND
    '/+/DY_E_V3_OFFEN.CST'        = 0 AND
    '/+/DY_E_V3_GESCHL.CST'     = 0 AND
    '/+/DY_E_V3_MODE_F.CST'     = 0 AND
    '/+/DY_E_V3_MODE_T.CST'     = 0 AND
    '/+/DY_E_V3_CAS2_FRE.CST' = 0 AND 
    ('/+/DY_E_V3_GESCHL' = 0 OR '/+/DY_E_V3_GESCHL' = 1 OR '/+/DY_E_V3.IGN' = 1) THEN;

     '/+/IP_DY_E_V_3_CST.CV' := 0;
ELSE
      '/+/IP_DY_E_V_3_CST.CV' := -1;
ENDIF;


  
   REM Erstellen der Dynamischen Strings fuer die Sender Weg Informations Anbindung
   '/+/DY_E_VF.$REF' :=  ""//"" +  '^/ST_MY_UNIT_NAME.CV' + ""/GAS_W"" + '/+/FP_WEG.CV' + ""_V_FQ.CV"";
   '/+/ST_E_VF.CV' := '/+/DY_E_VF';

IF '/+/DY_E_VF.IGN' = 0 THEN

'/+/DY_E_VF_SW_CAS2.$REF'   := ""//"" +  '/+/DY_E_VF' +""/B/SW_CAS2"";
'/+/DY_E_VF_OFFEN.$REF'         := ""//"" +  '/+/DY_E_VF' +""/B/OFFEN"";
'/+/DY_E_VF_GESCHL.$REF'     := ""//"" +  '/+/DY_E_VF' +""/B/GESCHL"";
'/+/DY_E_VF_MODE_F.$REF'     := ""//"" +  '/+/DY_E_VF' +""/B/MODE_FREI"";
'/+/DY_E_VF_MODE_T.$REF'     := ""//"" +  '/+/DY_E_VF' +""/B/D/MODE.TARGET"";
'/+/DY_E_VF_CAS2_FRE.$REF'  :=""//"" +  '/+/DY_E_VF' +""/B/CAS2_FREI"";

ELSE IF  '/+/DY_E_VF.IGN' = 1 THEN;

'/+/DY_E_VF_SW_CAS2.$REF'    := """";
'/+/DY_E_VF_OFFEN.$REF'          := """";
'/+/DY_E_VF_GESCHL.$REF'       := """";
'/+/DY_E_VF_MODE_F.$REF'       := """";
'/+/DY_E_VF_MODE_T.$REF'       := """";
'/+/DY_E_VF_CAS2_FRE.$REF'   := """";

ENDIF;
ENDIF;

IF '/+/DY_E_VF.CST'                      = 0 AND
    '/+/DY_E_VF_SW_CAS2.CST'  = 0 AND
    '/+/DY_E_VF_OFFEN.CST'        = 0 AND
    '/+/DY_E_VF_GESCHL.CST'     = 0 AND
    '/+/DY_E_VF_MODE_F.CST'     = 0 AND
    '/+/DY_E_VF_MODE_T.CST'     = 0 AND
    '/+/DY_E_VF_CAS2_FRE.CST' = 0 AND 
    ('/+/DY_E_VF_GESCHL' = 0 OR '/+/DY_E_VF_GESCHL' = 1 OR '/+/DY_E_VF.IGN' = 1) THEN;

     '/+/IP_DY_E_V_FQ_CST.CV' := 0;
ELSE
      '/+/IP_DY_E_V_FQ_CST.CV' := -1;
ENDIF;

ENDIF;" }
  }
  ATTRIBUTE_INSTANCE NAME="DY_G/T_EXPRESSION"
  {
    VALUE { TYPE=EXPRESSION EXPRESSION="IF '/+/FLAG_DYN_REF_BER.CV' = 1 THEN;

'/+/ST_GAS_WEG.CV' := '/+/FP_WEG.CVS';

IF '/+/FP_GASST.CV' > 0  THEN
 
   '/+/DY_GASST_OK.$REF' := ""//"" + '/+/FP_GASST.CVS' + ""/GASST_OK.CV"";
   '/+/ST_GASST.CV' :=   '/+/FP_GASST.CVS';

ELSE
   '/+/DY_GASST_OK.$REF'   := """";
   '/+/ST_GASST.CV'  :="""";

END_IF;


IF '/+/DY_GASST_OK.CST' = 0 AND
('/+/DY_GASST_OK' = 0 OR '/+/DY_GASST_OK' = 1 OR '/+/FP_GASST.CV' = 0) THEN
   
    '/+/IP_DY_GASST_CST.CV' := 0;

ELSE
     '/+/IP_DY_GASST_CST.CV' := -1;

ENDIF;

ENDIF;" }
  }
  ATTRIBUTE_INSTANCE NAME="FAL_SETZEIT/TIME_DURATION"
  {
    VALUE { CV=999999 }
  }
  ATTRIBUTE_INSTANCE NAME="HO_UNIT/DESC"
  {
    VALUE { CV="SS_UNIT" }
  }
  ATTRIBUTE_INSTANCE NAME="HO_UNIT/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="'//#_HOLD#/D_AKT.CV' = 1" }
  }
  ATTRIBUTE_INSTANCE NAME="REAKTIONSZEIT/TIME_DURATION"
  {
    VALUE { CV=999999 }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND1/DESC"
  {
    VALUE { CV="UNTERBR Taste" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND1/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="'/+/TASTE_1.CV' = 0 AND '/+/TASTE_1_AKTIV.CV' = 1 AND '^/UNTERBR_AKT.CV' = 1" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND2/DESC"
  {
    VALUE { CV="PC0020.X < FP_UNTERBR_PSL (HYS = PC_HYS)" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND2/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="(('//#PC0020#/B/A/PV.CV' < '/+/FP_UNTERBR_PSL.CV') OR (('//#PC0020#/B/A/PV.CV' < ( '/+/FP_UNTERBR_PSL.CV'   + '/+/IP_PC_HYS.CV' ))  AND ('OUT_D.CV' = 1 ))) AND ('^/UNTERBR_AKT.CV' = 1);" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND3/DESC"
  {
    VALUE { CV="PC0020.X > FP_UNTERBR_PSH (HYS = PC_HYS)" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND3/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="(('//#PC0020#/B/A/PV.CV' > '/+/FP_UNTERBR_PSH.CV') OR (('//#PC0020#/B/A/PV.CV' > (  '/+/FP_UNTERBR_PSH.CV'  - '/+/IP_PC_HYS.CV' )) AND ('OUT_D.CV' = 1))) AND ('^/UNTERBR_AKT.CV' = 1);" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND4/DESC"
  {
    VALUE { CV="TC0030.X < FP_UNTERBR_TSL (HYS = TC_HYS)" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND4/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="(('//#TC0030#/B/A/PV.CV' < '/+/FP_UNTERBR_TSL.CV') OR (( '//#TC0030#/B/A/PV.CV' < ( '/+/FP_UNTERBR_TSL.CV'  + '/+/IP_TC_HYS.CV' )) AND ('OUT_D.CV' =1 )))   AND ('^/UNTERBR_AKT.CV' = 1);" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND5/DESC"
  {
    VALUE { CV="TC0030.X > FP_UNTERBR_TSH (HYS = TC_HYS)" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND5/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="(('//#TC0030#/B/A/PV.CV' > '/+/FP_UNTERBR_TSH.CV') OR (( '//#TC0030#/B/A/PV.CV' > ( '/+/FP_UNTERBR_TSH.CV'  - '/+/IP_TC_HYS.CV' )) AND ('OUT_D.CV' = 1))) AND ('^/UNTERBR_AKT.CV' = 1);" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND6/DESC"
  {
    VALUE { CV="Gasstation" }
  }
  ATTRIBUTE_INSTANCE NAME="UNTBR_CND6/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="'/+/DY_GASST_OK' = 1  AND '^/UNTERBR_AKT.CV' = 1" }
  }
  ATTRIBUTE_INSTANCE NAME="WD_STATE/T_EXPRESSION"
  {
    VALUE { TYPE=CONDITION EXPRESSION="'/+/WDOG_STATE.CV' = '$phase_wdog_states:FAILED'" }
  }
}

/* FUNCTION BLOCK(S) USING:"__50C1DA15_24FF64E8__"
*/



FUNCTION_BLOCK_DEFINITION NAME="__50C1DA15_24FF64E8__" CATEGORY=""
 user="ADMINISTRATOR" time=1354881635/* "07-Dec-2012 13:00:35" */
{
  SFC_ALGORITHM
  {
    STEP NAME="AC_S1"
    {
      RECTANGLE= { X=200 Y=800 H=25 W=100 }
    }
    STEP NAME="AC_S2"
    {
      RECTANGLE= { X=200 Y=920 H=25 W=100 }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV' := 0;
'^/IP_FRAGE_NEIN.CV' := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Restart Taste betaetigt"";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV'    := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="AC_S3"
    {
      RECTANGLE= { X=470 Y=920 H=25 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: SFC wiederholen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch' THEN
'^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := ""Aktionen nicht alle ausgeführt, EMR rufen ! "";
'^/IP_FRAGE_TEXT.CV' := ""Sequenz wiederholen ? "";
'^/IP_FRAGE_JA.CV' := 1;
'^/IP_FRAGE_NEIN.CV' := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Sequenz wiederholen quittiert"";
'^/IP_TR1_T' := ('^/IP_FRAGE_JA.CV' =0);
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV'    := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="AC_S4"
    {
      RECTANGLE= { X=470 Y=1040 H=25 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' > 0 AND '^/OWNER.CV' != '$phase_owner_id:External' THEN
'^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV' := 0;
'^/IP_FRAGE_NEIN.CV' := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV'    := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S1"
    {
      DESCRIPTION="Reset 1"
      RECTANGLE= { X=200 Y=50 H=40 W=100 }
      ACTION NAME="RESTART"
      {
        DESCRIPTION="Restart Type"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/RESTART_TYPE.CV' := '$phase_restart_types:From Start'"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'       := 0;
'^/IP_FRAGE_NEIN.CV'   := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="RESET_IP_AC"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_AC.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S1/RESTART/STATE.CV' <> '$sfc_action_states:Complete' OR
'S1/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S3"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=210 Y=570 H=20 W=80 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S34"
    {
      DESCRIPTION="Regler+Weg Aus"
      RECTANGLE= { X=200 Y=470 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#PC0020B#/B/SW_ROUT.CV'       := 0;
'//#PC0020B#/B/A/MODE.TARGET' := ROUT;
'//#PC0020B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="FC1705  ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1705#/B/SW_ROUT.CV'       := 0;
'//#FC1705#/B/A/MODE.TARGET' := ROUT;
'//#FC1705#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        DESCRIPTION="FC1725 ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1725#/B/SW_ROUT.CV'       := 0;
'//#FC1725#/B/A/MODE.TARGET' := ROUT;
'//#FC1725#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A5"
      {
        DESCRIPTION="TC0030B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#TC0030B#/B/SW_ROUT.CV'       := 0;
'//#TC0030B#/B/A/MODE.TARGET' := ROUT;
'//#TC0030B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        DESCRIPTION="Empfang Weg V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V1_MODE_F'     := CAS;
'^/DY_E_V1_MODE_T'     := CAS;
'^/DY_E_V1_CAS2_FRE'  := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A7"
      {
        DESCRIPTION="Empfang Weg V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V2_MODE_F'     := CAS;
'^/DY_E_V2_MODE_T'     := CAS;
'^/DY_E_V2_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A8"
      {
        DESCRIPTION="Empfang Weg V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V3_MODE_F'     := CAS; 
'^/DY_E_V3_MODE_T'     := CAS;
'^/DY_E_V3_CAS2_FRE'  := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A9"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_SW_CAS2' := 0;
'^/DY_E_VF_MODE_F'     := CAS;
'^/DY_E_VF_MODE_T'     := CAS;
'^/DY_E_VF_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A11"
      {
        DESCRIPTION="Reaktionszeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=   ""Ventil"" + '/+/ST_E_V1' + "" geschlossen"";
'^/IP_TR1_T' := ('^/DY_E_V1_GESCHL' = 1  OR '^/DY_E_V1.IGN' = 1);

'^/IP_S_T2.CV'    :=  ""Ventil"" + '/+/ST_E_V2'  + "" geschlossen"";
'^/IP_TR2_T' := ('^/DY_E_V2_GESCHL' = 1  OR '^/DY_E_V2.IGN' = 1 );

'^/IP_S_T3.CV'    :=  ""Ventil"" + '/+/ST_E_V3'  + "" geschlossen"";
'^/IP_TR3_T' := ('^/DY_E_V3_GESCHL' = 1  OR '^/DY_E_V3.IGN' = 1);

'^/IP_S_T4.CV'    :=  ""Ventil"" + '/+/ST_E_VF'  + "" geschlossen"";
'^/IP_TR4_T' := ('^/DY_E_VF_GESCHL' = 1  OR '^/DY_E_VF.IGN' = 1 );

'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S34/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A4/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A6/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A7/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A8/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A9/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A11/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S34/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S53"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=210 Y=170 H=20 W=80 }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL'                               := -999999;"
        DELAY_TIME=0
      }
      ACTION NAME="A10"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="A13"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 0;
'^/TASTE_1_AKTIV.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S53/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A10/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A13/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S54"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=270 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S54/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S54/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S55"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=270 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FC_SCHL_RAMPE.CV' :=  ( 100  * '^/IP_ZYKLUS_ZEIT.CV' )  / '^/FP_FC_SCHLIESS_Z.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := '^/DY_E_FC_BKCAL_IN';
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       :=  '/+/DY_E_FC_SW_ROUT.CV'    - '^/IP_FC_SCHL_RAMPE.CV';"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Ausgang Regler "" + '^/ST_E_FC.CV' + "" <= 0 : "" + '^/DY_E_FC_SW_ROUT' + "" <= 0"" ;
'^/IP_TR1_T.CV' :=  ( '^/DY_E_FC_SW_ROUT' <= 0 ) ;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S55/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S55/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S55/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S56"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=360 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S56/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S56/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    INITIAL_STEP="S1"
    TRANSITION NAME="AC_T1"
    {
      POSITION= { X=240 Y=860 }
      TERMINATION=F
      EXPRESSION="'^/IP_AC.CV' = 0"
    }
    TRANSITION NAME="AC_T2"
    {
      POSITION= { X=510 Y=860 }
      TERMINATION=F
      EXPRESSION="'^/IP_AC.CV' = 1"
    }
    TRANSITION NAME="AC_T3"
    {
      DESCRIPTION="Ende"
      POSITION= { X=240 Y=1100 }
      TERMINATION=T
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="AC_T4"
    {
      POSITION= { X=510 Y=980 }
      TERMINATION=F
      EXPRESSION="'^/IP_FRAGE_JA.CV' = 0"
    }
    TRANSITION NAME="AC_T5"
    {
      POSITION= { X=510 Y=1100 }
      TERMINATION=F
      EXPRESSION="'^/REQUEST.CV' = 0 OR
'^/OWNER.CV' = '$phase_owner_id:External'"
    }
    TRANSITION NAME="T1"
    {
      POSITION= { X=240 Y=130 }
      TERMINATION=F
      EXPRESSION="('^/FLAG_DYN_REF_OK.CV' = 1 AND 
'^/IP_FP_OK.CV' = 1)
AND
(('S1/RESTART/STATE.CV' = '$sfc_action_states:Complete' AND
'S1/TEXT/STATE.CV' = '$sfc_action_states:Complete') OR 'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T2"
    {
      POSITION= { X=530 Y=130 }
      TERMINATION=F
      EXPRESSION="(('S1/RESTART/STATE.CV' = '$sfc_action_states:Complete' AND
'S1/TEXT/STATE.CV' = '$sfc_action_states:Complete') OR 'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T3"
    {
      DESCRIPTION="Ende"
      POSITION= { X=240 Y=620 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T42"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=240 Y=510 }
      TERMINATION=F
      EXPRESSION="(('^/DY_E_V1_GESCHL' = 1 OR '^/DY_E_V1.IGN' = 1) AND 
('^/DY_E_V2_GESCHL' = 1 OR '^/DY_E_V2.IGN' = 1) AND  
('^/DY_E_V3_GESCHL' = 1 OR '^/DY_E_V3.IGN' = 1) AND 
('^/DY_E_VF_GESCHL' = 1 OR '^/DY_E_VF.IGN' = 1))
AND
(('S34/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A9/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A11/STATE.CV' = '$sfc_action_states:Complete') OR 'S34/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T68"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=240 Y=230 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' = 0)
AND
(('S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete') OR 'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T69"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=360 Y=230 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' > 0)
AND
(('S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete') OR 'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T70"
    {
      POSITION= { X=240 Y=320 }
      TERMINATION=F
      EXPRESSION="(('S54/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S54/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T71"
    {
      POSITION= { X=360 Y=320 }
      TERMINATION=F
      EXPRESSION="('^/DY_E_FC_SW_ROUT' <= 0)
AND
(('S55/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S55/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S55/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T72"
    {
      POSITION= { X=360 Y=400 }
      TERMINATION=F
      EXPRESSION="(('S56/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S56/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    STEP_TRANSITION_CONNECTION STEP="AC_S1" TRANSITION="AC_T1" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S1" TRANSITION="AC_T2" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S2" TRANSITION="AC_T3" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S3" TRANSITION="AC_T4" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S4" TRANSITION="AC_T5" { }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T1" { }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T2" { }
    STEP_TRANSITION_CONNECTION STEP="S3" TRANSITION="T3" { }
    STEP_TRANSITION_CONNECTION STEP="S34" TRANSITION="T42" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T69" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T68" { }
    STEP_TRANSITION_CONNECTION STEP="S54" TRANSITION="T70" { }
    STEP_TRANSITION_CONNECTION STEP="S55" TRANSITION="T71" { }
    STEP_TRANSITION_CONNECTION STEP="S56" TRANSITION="T72" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T1" STEP="AC_S2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T2" STEP="AC_S3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T4" STEP="AC_S4" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T5" STEP="S1" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=100 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="S53" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T2" STEP="S3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T3" STEP="AC_S1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T42" STEP="S3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T68" STEP="S54" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T69" STEP="S55" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T70" STEP="S34" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T71" STEP="S56" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T72" STEP="S34" { }
  }
  ATTRIBUTE_INSTANCE NAME="AUTO_ADVANCE"
  {
    VALUE { CV=T }
  }
  ATTRIBUTE_INSTANCE NAME="COMMAND"
  {
    VALUE
    {
      SET="$sfc_commands"
      STRING_VALUE="Start Sequence"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="CONFIRM_FAIL"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="ERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="INITIAL_STATE"
  {
    VALUE
    {
      SET="$sfc_initial_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="RERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="STATE"
  {
    VALUE
    {
      SET="$sfc_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="STATUS"
  {
    VALUE
    {
      ENUM_SET="$module_status_opts"
    }
  }
  ATTRIBUTE_INSTANCE NAME="TIME"
  {
    VALUE { CV=0 }
  }
}
FUNCTION_BLOCK_DEFINITION NAME="LC_GF_SUB_START" CATEGORY="Library/CompositeTemplates/LC_GF_GENERAL"
 user="ADMINISTRATOR" time=1525176778/* "01-May-2018 14:12:58" */
{
  SFC_ALGORITHM
  {
    GRAPHICS ALGORITHM=SFC
    {
      TEXT_GRAPHIC
      {
        NAME="41C80B88"
        ORIGIN= { X=41 Y=31 }
        END= { X=175 Y=70 }
        TEXT="LC_GF_SUB_START
Version 2.0
17. Feb. 2005 / S. Schnidrig"
      }
    }
    STEP NAME="S1"
    {
      RECTANGLE= { X=200 Y=30 H=40 W=100 }
      ACTION NAME="RESTART"
      {
        DESCRIPTION="Restart Type"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/RESTART_TYPE.CV' := '$phase_restart_types:From Start'"
        DELAY_TIME=0
      }
      ACTION NAME="SS_TASTE"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#_HOLD#/TASTE.CV' := 1"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/IP_MELDE_TEXT.CV' := "" "";
'/+/IP_FRAGE_TEXT.CV'  :=  "" "";
'/+/IP_FRAGE_JA.CV' := 0;
'/+/IP_FRAGE_NEIN.CV' := 0;
'/+/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/IP_S_T1.CV'    := "" "";
'/+/IP_TR1_T' := 0;
'/+/IP_S_T2.CV'    := "" "";
'/+/IP_TR2_T' := 0;
'/+/IP_S_T3.CV'    := "" "";
'/+/IP_TR3_T' := 0;
'/+/IP_S_T4.CV'    := "" "";
'/+/IP_TR4_T' := 0;
'/+/IP_S_T5.CV'    := "" "";
'/+/IP_TR5_T' := 0;
'/+/IP_S_T6.CV'    := "" "";
'/+/IP_TR6_T' := 0;
'/+/IP_S_T7.CV'    := "" "";
'/+/IP_TR7_T' := 0;
'/+/IP_S_T8.CV'    := "" "";
'/+/IP_TR8_T' := 0;
'/+/IP_S_T9.CV'    := "" "";
'/+/IP_TR9_T' := 0;
'/+/IP_S_T10.CV' := "" "";
'/+/IP_TR10_T' := 0;
'/+/IP_S_T11.CV'    := "" "";
'/+/IP_TR11_T' := 0;
'/+/IP_S_T12.CV'    := "" "";
'/+/IP_TR12_T' := 0;
'/+/IP_S_T13.CV'    := "" "";
'/+/IP_TR13_T' := 0;
'/+/IP_S_T14.CV'    := "" "";
'/+/IP_TR14_T' := 0;
'/+/IP_S_T15.CV'    := "" "";
'/+/IP_TR15_T' := 0;"
      }
    }
    STEP NAME="S2"
    {
      RECTANGLE= { X=200 Y=160 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF   ( ('//#GF_1_HO#/BSTATUS.CV' <> '$phase_state:Running'  AND '/GF_1_HO.IGN' = 0) OR
      ('//#GF_2_HO#/BSTATUS.CV' <> '$phase_state:Running'  AND '/GF_2_HO.IGN' = 0) OR
      ('//#GF_3_HO#/BSTATUS.CV' <> '$phase_state:Running'  AND '/GF_3_HO.IGN' = 0)) THEN

     '//#UM#/GF_HO_RESTART' := 1;

ENDIF;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF ('/GF_1_HO.IGN' = 0 AND '/GF_2_HO.IGN' = 0 AND '/GF_3_HO.IGN' = 0) THEN
     '//#UM#/GF_HO_ANZAHL.CV' := 3;
ELSE IF ('/GF_1_HO.IGN' = 0 AND '/GF_2_HO.IGN' = 0) OR  ('/GF_1_HO.IGN' = 0 AND '/GF_3_HO.IGN' = 0) OR  ('/GF_2_HO.IGN' = 0 AND '/GF_3_HO.IGN' = 0) THEN
     '//#UM#/GF_HO_ANZAHL.CV' := 2;
ELSE IF '/GF_1_HO.IGN' = 0 OR '/GF_2_HO.IGN' = 0 OR '/GF_3_HO.IGN' = 0 THEN
     '//#UM#/GF_HO_ANZAHL.CV' := 1;
ELSE 
     '//#UM#/GF_HO_ANZAHL.CV' := 0;
ENDIF;
ENDIF;
ENDIF;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/IP_S_T1.CV'    := ""Status ""  + '//#GF_1_HO#/CLASS.CV'  + "" Running"";
'/+/IP_TR1_T' := ('//#GF_1_HO#/BSTATUS.CV' = '$phase_state:Running' OR '/GF_1_HO.IGN' = 1);
'/+/IP_S_T2.CV'    := ""Status ""  + '//#GF_2_HO#/CLASS.CV'  + "" Running"";
'/+/IP_TR2_T' := ( '//#GF_2_HO#/BSTATUS.CV' = '$phase_state:Running' OR '/GF_2_HO.IGN' = 1);
'/+/IP_S_T3.CV'    := ""Status ""  + '//#GF_3_HO#/CLASS.CV'  + "" Running"";
'/+/IP_TR3_T' :=  ( '//#GF_3_HO#/BSTATUS.CV' = '$phase_state:Running' OR '/GF_3_HO.IGN' = 1);
'/+/IP_S_T4.CV'    := "" "";
'/+/IP_TR4_T' := 0;
'/+/IP_S_T5.CV'    := "" "";
'/+/IP_TR5_T' := 0;
'/+/IP_S_T6.CV'    := "" "";
'/+/IP_TR6_T' := 0;
'/+/IP_S_T7.CV'    := "" "";
'/+/IP_TR7_T' := 0;
'/+/IP_S_T8.CV'    := "" "";
'/+/IP_TR8_T' := 0;
'/+/IP_S_T9.CV'    := "" "";
'/+/IP_TR9_T' := 0;
'/+/IP_S_T10.CV' := "" "";
'/+/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S3"
    {
      RECTANGLE= { X=200 Y=280 H=20 W=100 }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/IP_MELDE_TEXT.CV' := "" "";
'/+/IP_FRAGE_TEXT.CV'  :=  "" "";
'/+/IP_FRAGE_JA.CV' := 0;
'/+/IP_FRAGE_NEIN.CV' := 0;
'/+/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/IP_S_T1.CV'    := "" "";
'/+/IP_TR1_T' := 0;
'/+/IP_S_T2.CV'    := "" "";
'/+/IP_TR2_T' := 0;
'/+/IP_S_T3.CV'    := "" "";
'/+/IP_TR3_T' := 0;
'/+/IP_S_T4.CV'    := "" "";
'/+/IP_TR4_T' := 0;
'/+/IP_S_T5.CV'    := "" "";
'/+/IP_TR5_T' := 0;
'/+/IP_S_T6.CV'    := "" "";
'/+/IP_TR6_T' := 0;
'/+/IP_S_T7.CV'    := "" "";
'/+/IP_TR7_T' := 0;
'/+/IP_S_T8.CV'    := "" "";
'/+/IP_TR8_T' := 0;
'/+/IP_S_T9.CV'    := "" "";
'/+/IP_TR9_T' := 0;
'/+/IP_S_T10.CV' := "" "";
'/+/IP_TR10_T' := 0;"
      }
    }
    INITIAL_STEP="S1"
    TRANSITION NAME="T1"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=100 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T2"
    {
      POSITION= { X=240 Y=340 }
      TERMINATION=T
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T3"
    {
      POSITION= { X=240 Y=220 }
      TERMINATION=F
      EXPRESSION="(('//#GF_1_HO#/BSTATUS.CV' = '$phase_state:Running' OR '/GF_1_HO.IGN' = 1)
AND
( '//#GF_2_HO#/BSTATUS.CV' = '$phase_state:Running' OR '/GF_2_HO.IGN' = 1)
AND
( '//#GF_3_HO#/BSTATUS.CV' = '$phase_state:Running' OR '/GF_3_HO.IGN' = 1))"
    }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T1" { }
    STEP_TRANSITION_CONNECTION STEP="S2" TRANSITION="T3" { }
    STEP_TRANSITION_CONNECTION STEP="S3" TRANSITION="T2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="S2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T3" STEP="S3" { }
  }
  ATTRIBUTE_INSTANCE NAME="AUTO_ADVANCE"
  {
    VALUE { CV=T }
  }
  ATTRIBUTE_INSTANCE NAME="COMMAND"
  {
    VALUE
    {
      SET="$sfc_commands"
      STRING_VALUE="Start Sequence"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="CONFIRM_FAIL"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="ERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="INITIAL_STATE"
  {
    VALUE
    {
      SET="$sfc_initial_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="RERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="STATE"
  {
    VALUE
    {
      SET="$sfc_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="STATUS"
  {
    VALUE
    {
      ENUM_SET="$module_status_opts"
    }
  }
  ATTRIBUTE_INSTANCE NAME="TIME"
  {
    VALUE { CV=0 }
  }
}
FUNCTION_BLOCK_DEFINITION NAME="LC_GF_RESTART_LO" CATEGORY="Library/CompositeTemplates/LC_GF_GENERAL"
 user="ADMINISTRATOR" time=1525171733/* "01-May-2018 12:48:53" */
{
  FUNCTION_BLOCK NAME="LC_GF_SUB_START" DEFINITION="LC_GF_SUB_START"
  {
    ID=32802362
    RECTANGLE= { X=20 Y=20 H=80 W=140 }
  }
  SFC_ALGORITHM
  {
    GRAPHICS ALGORITHM=SFC
    {
      TEXT_GRAPHIC
      {
        NAME="41C80B88"
        ORIGIN= { X=41 Y=31 }
        END= { X=155 Y=73 }
        TEXT="LC_GF_RESTART_LO
Version 2.0
 17. Feb. 2005 / S. Schnidrig"
      }
    }
    STEP NAME="S1"
    {
      RECTANGLE= { X=210 Y=5 H=40 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=NON_BOOLEAN
        QUALIFIER=N
        EXPRESSION="LC_GF_SUB_START"
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'LC_GF_SUB_START/COMMAND.CV' := '$sfc_commands:Start Sequence'"
        DELAY_TIME=0
      }
    }
    STEP NAME="S2"
    {
      RECTANGLE= { X=210 Y=150 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FP_OK.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Formula Parameter eingegeben "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;
'^/IP_S_T11.CV' := "" "";
'^/IP_TR11_T' := 0;
'^/IP_S_T12.CV' := "" "";
'^/IP_TR12_T' := 0;
'^/IP_S_T13.CV' := "" "";
'^/IP_TR13_T' := 0;
'^/IP_S_T14.CV' := "" "";
'^/IP_TR14_T' := 0;
'^/IP_S_T15.CV' := "" "";
'^/IP_TR15_T' := 0;"
      }
    }
    INITIAL_STEP="S1"
    TRANSITION NAME="T1"
    {
      POSITION= { X=250 Y=80 }
      TERMINATION=F
      EXPRESSION="'LC_GF_SUB_START/STATE.CV' = '$sfc_states:Sequence Completed'"
    }
    TRANSITION NAME="T2"
    {
      DESCRIPTION="OK"
      POSITION= { X=250 Y=230 }
      TERMINATION=T
      EXPRESSION="TRUE"
    }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T1" { }
    STEP_TRANSITION_CONNECTION STEP="S2" TRANSITION="T2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="S2" { }
  }
  ATTRIBUTE_INSTANCE NAME="AUTO_ADVANCE"
  {
    VALUE { CV=T }
  }
  ATTRIBUTE_INSTANCE NAME="COMMAND"
  {
    VALUE
    {
      SET="$sfc_commands"
      STRING_VALUE="Start Sequence"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="CONFIRM_FAIL"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="ERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="INITIAL_STATE"
  {
    VALUE
    {
      SET="$sfc_initial_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="RERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="STATE"
  {
    VALUE
    {
      SET="$sfc_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="STATUS"
  {
    VALUE
    {
      ENUM_SET="$module_status_opts"
    }
  }
  ATTRIBUTE_INSTANCE NAME="TIME"
  {
    VALUE { CV=0 }
  }
}

/* FUNCTION BLOCK(S) USING:"__50EA9146_C93165D6__"
*/



FUNCTION_BLOCK_DEFINITION NAME="__50EA9146_C93165D6__" CATEGORY=""
 user="ADMINISTRATOR" time=1525180899/* "01-May-2018 15:21:39" */
{
  FUNCTION_BLOCK NAME="LC_GF_SUB_START" DEFINITION="LC_GF_SUB_START"
  {
    ID=109935759
    RECTANGLE= { X=20 Y=20 H=80 W=140 }
  }
  ATTRIBUTE NAME="IP_STRING" TYPE=UNICODE_STRING
  {
    CONNECTION=INTERNAL_SOURCE
    RECTANGLE= { X=315 Y=1585 H=20 W=100 }
    GROUP="Tuning"
    CATEGORY { CATEGORY=COMMON }
  }
  SFC_ALGORITHM
  {
    STEP NAME="S1"
    {
      RECTANGLE= { X=200 Y=5 H=20 W=100 }
      ACTION NAME="A3"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FLAG_DYN_REF_OK.CV' = 0 THEN
     '^/FLAG_DYN_REF_BER.CV' := 1;
ENDIF;"
        DELAY_TIME=0
      }
      ACTION NAME="A1"
      {
        ACTION_TYPE=NON_BOOLEAN
        QUALIFIER=N
        EXPRESSION="LC_GF_SUB_START"
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'LC_GF_SUB_START/COMMAND.CV' := '$sfc_commands:Start Sequence'"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="IF '^/IP_ZYKLUS_ZEIT.CV' = 0 THEN
	'^/IP_ZYKLUS_ZEIT.CV'  := 'S1/TIME.CV'
ENDIF"
      }
      ACTION NAME="A5"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FP_OK.CV' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_BESCHREI_TEXT.CV' := '^/FP_BESCHREI_TEXT.CV';"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S1/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S1/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S1/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S1/A6/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S10"
    {
      DESCRIPTION="FP_OPT_PC"
      RECTANGLE= { X=200 Y=1935 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B CAS"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_PC.CV' = 'L_EIN_AUS:EIN' THEN 
   '//#PC0020B#/B/SW_CAS2.CV'       := '^/FP_PC_W.CV';
   '//#PC0020B#/B/CAS2_FREI.CV'  := 1;
   '//#PC0020B#/B/A/MODE.TARGET' := CAS;
   '//#PC0020B#/B/MODE_FREI.CV'   := CAS;
END_IF"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S10/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S10/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S11"
    {
      DESCRIPTION="FP_OPT_FC_GAS"
      RECTANGLE= { X=200 Y=2015 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="FC  ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_FC_GAS.CV' = 'L_EIN_AUS:EIN' THEN
   '/+/DY_E_FC_SW_ROUT.CV'       := 0;
ELSE;
   '/+/DY_E_FC_SW_ROUT.CV'       := 100;
END_IF;

 '/+/DY_E_FC_MODE.TARGET'         := ROUT;
 '/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S11/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S11/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S12"
    {
      DESCRIPTION="FP_OPT_FC_GAS"
      RECTANGLE= { X=200 Y=2080 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="FC CAS"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_FC_GAS.CV' = 'L_EIN_AUS:EIN' THEN 
   '/+/DY_E_FC_SW_CAS2.CV'        := '^/FP_FC_W_GAS.CV';;
   '^/DY_E_FC_CAS2_FRE'              := 1;
   '/+/DY_E_FC_MODE.TARGET'          := CAS;
   '/+/DY_E_FC_MODE_F.CV'          := CAS+AUTO+MAN;
END_IF"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S12/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S12/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S13"
    {
      DESCRIPTION="FP_OPT_FC_ABL"
      RECTANGLE= { X=200 Y=2150 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="FC1705 /1725 ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_FC_ABL.CV' = 'L_EIN_AUS:EIN' THEN
   '//#FC1705#/B/SW_ROUT.CV'       := 0;
   '//#FC1725#/B/SW_ROUT.CV'       := 0;
ELSE;
   '//#FC1705#/B/SW_ROUT.CV'       := 100;
   '//#FC1725#/B/SW_ROUT.CV'       := 100;
END_IF;

   '//#FC1705#/B/A/MODE.TARGET' := ROUT;
   '//#FC1705#/B/MODE_FREI.CV'   := ROUT;
   '//#FC1725#/B/A/MODE.TARGET' := ROUT;
   '//#FC1725#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S13/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S13/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S14"
    {
      DESCRIPTION="Zeit Reset"
      RECTANGLE= { X=200 Y=1130 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reaktions Zeit reset"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FLAG_ZEITRST.CV' = 0 THEN
   '^/FAIL_MONITOR/REAKTIONSZEIT/RESET_IN.CV' := 1;
   '^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV' := 0;
   '^/FLAG_ZEITRST.CV' := 1;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S14/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S14/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S15"
    {
      DESCRIPTION="FP_OPT_PC"
      RECTANGLE= { X=200 Y=1865 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_PC.CV' = 'L_EIN_AUS:EIN' THEN
   '//#PC0020B#/B/SW_ROUT.CV'       := 0;
ELSE;
   '//#PC0020B#/B/SW_ROUT.CV'       := 100;
END_IF;

'//#PC0020B#/B/A/MODE.TARGET' := ROUT;
'//#PC0020B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S15/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S15/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S16"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=210 Y=4015 H=20 W=80 }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="Texte Ruecksetzen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'   := "" "";
'^/IP_FRAGE_TEXT.CV'   := "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S16/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S16/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S17"
    {
      DESCRIPTION="Regler+Weg Aus"
      RECTANGLE= { X=840 Y=3365 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#PC0020B#/B/SW_ROUT.CV'       := 0;
'//#PC0020B#/B/A/MODE.TARGET' := ROUT;
'//#PC0020B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="FC1705  ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1705#/B/SW_ROUT.CV'       := 0;
'//#FC1705#/B/A/MODE.TARGET' := ROUT;
'//#FC1705#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        DESCRIPTION="FC1725 ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1725#/B/SW_ROUT.CV'       := 0;
'//#FC1725#/B/A/MODE.TARGET' := ROUT;
'//#FC1725#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A5"
      {
        DESCRIPTION="TC0030B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#TC0030B#/B/SW_ROUT.CV'       := 0;
'//#TC0030B#/B/A/MODE.TARGET' := ROUT;
'//#TC0030B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        DESCRIPTION="Empfang Weg V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A7"
      {
        DESCRIPTION="Empfang Weg V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A8"
      {
        DESCRIPTION="Empfang Weg V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A9"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_SW_CAS2' := 0;
'^/DY_E_VF_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A11"
      {
        DESCRIPTION="Reaktionszeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=   ""Ventil"" + '/+/ST_E_V1' + "" geschlossen"";
'^/IP_TR1_T' := ('^/DY_E_V1_GESCHL' = 1  OR '^/DY_E_V1.IGN' = 1);

'^/IP_S_T2.CV'    :=  ""Ventil"" + '/+/ST_E_V2'  + "" geschlossen"";
'^/IP_TR2_T' := ('^/DY_E_V2_GESCHL' = 1  OR '^/DY_E_V2.IGN' = 1 );

'^/IP_S_T3.CV'    :=  ""Ventil"" + '/+/ST_E_V3'  + "" geschlossen"";
'^/IP_TR3_T' := ('^/DY_E_V3_GESCHL' = 1  OR '^/DY_E_V3.IGN' = 1);

'^/IP_S_T4.CV'    :=  ""Ventil"" + '/+/ST_E_VF'  + "" geschlossen"";
'^/IP_TR4_T' := ('^/DY_E_VF_GESCHL' = 1  OR '^/DY_E_VF.IGN' = 1 );

'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S17/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A4/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A6/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A7/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A8/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A9/STATE.CV' <> '$sfc_action_states:Complete' OR
'S17/A11/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S17/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S18"
    {
      DESCRIPTION="Zeit Start"
      RECTANGLE= { X=200 Y=2425 H=20 W=100 }
      ACTION NAME="FAL_SETZEIT"
      {
        DESCRIPTION="Setzzeit Reset"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/FAL_SETZEIT/RESET_IN.CV' := 1;
'^/FAIL_MONITOR/FAL_SETZEIT/IN_D.CV'           := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="UNTERBR_SW_TASTE"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 1;
'^/TASTE_1_AKTIV.CV' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="Unterbr Akt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 1"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="REAKTIONSZEIT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV'           := 1;
'^/FAIL_MONITOR/REAKTIONSZEIT/RESET_IN.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S18/FAL_SETZEIT/STATE.CV' <> '$sfc_action_states:Complete' OR
'S18/UNTERBR_SW_TASTE/STATE.CV' <> '$sfc_action_states:Complete' OR
'S18/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S18/REAKTIONSZEIT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S18/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S19"
    {
      DESCRIPTION="Zeit"
      RECTANGLE= { X=1190 Y=2985 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Zeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/FAL_SETZEIT/RESET_IN.CV' := 1;
'^/FAIL_MONITOR/FAL_SETZEIT/IN_D.CV'           := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        DESCRIPTION="Alarm an Regler"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL' := '^/FP_FAL_GAS.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S19/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S19/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S19/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S2"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=760 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S2/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S2/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S2/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S20"
    {
      DESCRIPTION=" Weg Oeffnen"
      RECTANGLE= { X=210 Y=1775 H=20 W=80 }
      ACTION NAME="V_FQ"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_CAS2_FRE' := 0;
'^/DY_E_VF_SW_CAS2' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="FQ"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FQ_SW_CAS2'    := '^/FP_FSB_FQ_GAS.CV';
'^/DY_E_FQ_VORABSCH' := 0;
'^/DY_E_FQ_EIN'                := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S20/V_FQ/STATE.CV' <> '$sfc_action_states:Complete' OR
'S20/FQ/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S20/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S21"
    {
      DESCRIPTION=" Weg Oeffnen"
      RECTANGLE= { X=440 Y=1775 H=20 W=80 }
      ACTION NAME="V_FQ"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_SW_CAS2'  := 1;
'^/DY_E_VF_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="FQ"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FQ_SW_CAS2'    := '^/FP_FSB_FQ_GAS.CV';
'^/DY_E_FQ_VORABSCH' := 0;
'^/DY_E_FQ_EIN'                := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S21/V_FQ/STATE.CV' <> '$sfc_action_states:Complete' OR
'S21/FQ/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S21/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S22"
    {
      DESCRIPTION="FP_OPT_FC_ABL"
      RECTANGLE= { X=200 Y=2215 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="FC1705 / 1725 CAS"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_FC_ABL.CV' = 'L_EIN_AUS:EIN' THEN 
   '//#FC1705#/B/SW_CAS2.CV'       := '^/FP_FC_W_ABL.CV';
   '//#FC1705#/B/CAS2_FREI'        := 1;
   '//#FC1705#/B/A/MODE.TARGET' := CAS;
   '//#FC1705#/B/MODE_FREI.CV'   := CAS + AUTO + MAN;
   '//#FC1725#/B/SW_CAS2.CV'       := '^/FP_FC_W_ABL.CV';
   '//#FC1725#/B/CAS2_FREI'        := 1;
   '//#FC1725#/B/A/MODE.TARGET' := CAS;
   '//#FC1725#/B/MODE_FREI.CV'   := CAS + AUTO + MAN;
END_IF"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S22/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S22/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S23"
    {
      DESCRIPTION="FP_OPT_TC"
      RECTANGLE= { X=200 Y=2355 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="TC0030B CAS"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_TC.CV' = 'L_EIN_AUS:EIN' THEN 
   '//#TC0030B#/B/SW_CAS2.CV'       := '^/FP_TC_W.CV';
   '//#TC0030B#/B/CAS2_FREI'           := 1;
   '//#TC0030B#/B/A/MODE.TARGET' := CAS;
   '//#TC0030B#/B/MODE_FREI.CV'   := CAS+AUTO+MAN;
END_IF"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S23/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S23/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S24"
    {
      DESCRIPTION="FP_OPT_TC"
      RECTANGLE= { X=200 Y=2285 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="TC0030B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FP_OPT_TC.CV' = 'L_EIN_AUS:EIN' THEN
   '//#TC0030B#/B/SW_ROUT.CV'       := 0;
ELSE;
   '//#TC0030B#/B/SW_ROUT.CV'       := 100;
END_IF;

   '//#TC0030B#/B/A/MODE.TARGET' := ROUT;
   '//#TC0030B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S24/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S24/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S25"
    {
      DESCRIPTION="Dummy"
      RECTANGLE= { X=200 Y=2510 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/FAL_SETZEIT/RESET_IN.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Reaktionszeit abgelaufen : "" + '^/FAIL_MONITOR/REAKTIONSZEIT/ELAPSED_TIMER.CV' + "" >= "" + '^/FP_FSB_ZEIT.CV';
'^/IP_TR1_T.CV' := ('^/FAIL_MONITOR/REAKTIONSZEIT/ELAPSED_TIMER.CV' >= '^/FP_FSB_ZEIT.CV');


IF '^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:ZEIT - Reaktionszeit'  THEN;
     '^/IP_S_T2.CV'    := """" ; 
    '^/IP_TR2_T.CV' := 0;
 
ELSE IF '^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:DRUCK - Druck hoch und Reaktionszeit' THEN;

   '^/IP_S_T2.CV'    := '//#UM#/PC0020.CV' + "" >= FP_FSB_PSH : "" + '//#PC0020#/B/A/PV.CV' + "" >= "" + '^/FP_FSB_PSH.CV'; 
    '^/IP_TR2_T.CV' := ( '//#PC0020#/B/A/PV.CV' >= '^/FP_FSB_PSH.CV'); 

ELSE IF '^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:MENGE - Menge und Reaktionszeit'  THEN;

   '^/IP_S_T2.CV'    := ""Menge Gas erreicht : "" + '/+/DY_E_FQ_X' + "" >= "" + '^/FP_FSB_FQ_GAS.CV';
   '^/IP_TR2_T.CV' := ('/+/DY_E_FQ_X' >= '^/FP_FSB_FQ_GAS.CV');

ELSE IF '^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:DURCHFLUSS - Durchfluss tief und Reaktionszeit'  THEN;

    '^/IP_S_T2.CV'    :=  ""Durchfluss Gas <= FP_FSB_FSL_GAS : "" + '/+/DY_E_FC_X' + "" <= "" + '^/FP_FSB_FSL_GAS.CV' ;
    '^/IP_TR2_T.CV' := ('/+/DY_E_FC_X' <= '^/FP_FSB_FSL_GAS.CV');

ENDIF;
ENDIF;
ENDIF;
ENDIF;

'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S25/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S25/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S26"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=2625 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="A1"
      {
        DESCRIPTION="RP_FSB_OK_ZEIT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF ('^/FLAG_FSB_OK_ZEIT'=0) THEN
	'^/FLAG_FSB_OK_ZEIT':=1;
	'^/RP_FSB_OK_ZEIT.CV':=TIME('$time_format:UTC');
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S26/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S26/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S27"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=440 Y=3065 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
   '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="FSB Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV'      := 0;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV'  :=  0;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S27/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S27/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S27/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S28"
    {
      DESCRIPTION="Meldung 3"
      RECTANGLE= { X=430 Y=2790 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Transfer starten"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 

      '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FRAGE_TEXT.CV'  := ""Dosieren Gas abbrechen ?"";
'^/IP_FRAGE_JA.CV'       := 1;
'^/IP_FRAGE_NEIN.CV'   := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Dosieren Gas Abbrechen?"";
'^/IP_TR1_T.CV'  := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S28/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S28/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S28/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S29"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=860 Y=3165 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S29/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S29/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S3"
    {
      DESCRIPTION="Unterbr Akt"
      RECTANGLE= { X=200 Y=1200 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 1"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S3/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S3/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S30"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=440 Y=2875 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/FAL_SETZEIT/RESET_IN.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S30/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S30/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S31"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=1270 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S32"
    {
      DESCRIPTION="Meldung 4"
      RECTANGLE= { X=210 Y=3565 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Dosieren Gas Beenden"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
   '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FRAGE_TEXT.CV' := ""Dosieren Gas beenden ? "";
'^/IP_FRAGE_JA.CV'       := 1;
'^/IP_FRAGE_NEIN.CV'   := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Dosieren GAS beenden quittiert "";
'^/IP_TR1_T.CV'  := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S32/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S32/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S32/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S33"
    {
      DESCRIPTION="Transf Ende"
      RECTANGLE= { X=210 Y=3745 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="FC Reset"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AH'                        := 999999;
'^/DY_E_FC_AHH'                      := 999999;
'//#_HOLD#/FCAHH_AKT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S33/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S33/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S34"
    {
      DESCRIPTION="Regler+Weg Aus"
      RECTANGLE= { X=200 Y=3365 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#PC0020B#/B/SW_ROUT.CV'       := 0;
'//#PC0020B#/B/A/MODE.TARGET' := ROUT;
'//#PC0020B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="FC1705  ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1705#/B/SW_ROUT.CV'       := 0;
'//#FC1705#/B/A/MODE.TARGET' := ROUT;
'//#FC1705#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        DESCRIPTION="FC1725 ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1725#/B/SW_ROUT.CV'       := 0;
'//#FC1725#/B/A/MODE.TARGET' := ROUT;
'//#FC1725#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A5"
      {
        DESCRIPTION="TC0030B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#TC0030B#/B/SW_ROUT.CV'       := 0;
'//#TC0030B#/B/A/MODE.TARGET' := ROUT;
'//#TC0030B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        DESCRIPTION="Empfang Weg V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A7"
      {
        DESCRIPTION="Empfang Weg V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A8"
      {
        DESCRIPTION="Empfang Weg V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A9"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_SW_CAS2' := 0;
'^/DY_E_VF_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A11"
      {
        DESCRIPTION="Reaktionszeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=   ""Ventil"" + '/+/ST_E_V1' + "" geschlossen"";
'^/IP_TR1_T' := ('^/DY_E_V1_GESCHL' = 1  OR '^/DY_E_V1.IGN' = 1);

'^/IP_S_T2.CV'    :=  ""Ventil"" + '/+/ST_E_V2'  + "" geschlossen"";
'^/IP_TR2_T' := ('^/DY_E_V2_GESCHL' = 1  OR '^/DY_E_V2.IGN' = 1 );

'^/IP_S_T3.CV'    :=  ""Ventil"" + '/+/ST_E_V3'  + "" geschlossen"";
'^/IP_TR3_T' := ('^/DY_E_V3_GESCHL' = 1  OR '^/DY_E_V3.IGN' = 1);

'^/IP_S_T4.CV'    :=  ""Ventil"" + '/+/ST_E_VF'  + "" geschlossen"";
'^/IP_TR4_T' := ('^/DY_E_VF_GESCHL' = 1  OR '^/DY_E_VF.IGN' = 1 );

'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S34/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A4/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A6/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A7/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A8/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A9/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A11/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S34/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S35"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=690 Y=3255 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S35/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S35/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S36"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=570 Y=3465 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="FSB Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV'      := 0;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV'  :=  0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S36/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S36/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S36/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S37"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=560 Y=3565 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Dosieren Gas Beenden"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
   '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := ""Menge Gas zu hoch !"";
'^/IP_FRAGE_TEXT.CV' := ""Dosieren Gas abbrechen "";
'^/IP_FRAGE_JA.CV'      := 1;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=  ""Dosieren Gas abbrechen quittiert""   ; 
'^/IP_TR1_T.CV'  := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S37/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S37/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S37/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S38"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=570 Y=3655 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="Texte Ruecksetzen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'   := "" "";
'^/IP_FRAGE_TEXT.CV'   := "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S38/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S38/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S38/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S39"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=3465 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S4"
    {
      DESCRIPTION="Meldung 1"
      RECTANGLE= { X=210 Y=660 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Dosieren Gas starten"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
  '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FRAGE_TEXT.CV' := ""Dosieren GAS starten ?"";
'^/IP_FRAGE_JA.CV'      := 1;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Dosieren GAS starten quittiert"";
'^/IP_TR1_T.CV'  := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S4/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S4/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S4/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S40"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=860 Y=3455 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="IF '^/FAIL_MONITOR/UNTBR_CND2/OUT_D.CV' = 0 THEN
'^/IP_S_T1.CV'    := '//#UM#/PC0020.CV' + "".X >= FP_UNTERBR_PSL : "" + '//#PC0020#/B/A/PV.CV'  + "" >= "" + ( '^/FP_UNTERBR_PSL.CV'  );
ELSE
'^/IP_S_T1.CV'    := '//#UM#/PC0020.CV' + "".X >= FP_UNTERBR_PSL + HYS : "" + '//#PC0020#/B/A/PV.CV'  + "" >= "" + ( '^/FP_UNTERBR_PSL.CV'    + '/+/IP_PC_HYS.CV' );
ENDIF;
'^/IP_TR1_T.CV' :=    ( '^/FAIL_MONITOR/UNTBR_CND2/OUT_D.CV' = 0 ) ;

IF '^/FAIL_MONITOR/UNTBR_CND3/OUT_D.CV' = 0 THEN
'^/IP_S_T2.CV'    := '//#UM#/PC0020.CV' + "".X <= FP_UNTERBR_PSH : "" + '//#PC0020#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_PSH.CV'  ) ;
ELSE
'^/IP_S_T2.CV'    := '//#UM#/PC0020.CV' + "".X <= FP_UNTERBR_PSH - HYS : "" + '//#PC0020#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_PSH.CV'   - '/+/IP_PC_HYS.CV' ) ;
ENDIF;
'^/IP_TR2_T.CV' :=  ( '^/FAIL_MONITOR/UNTBR_CND3/OUT_D.CV' = 0 ) ;

IF '^/FAIL_MONITOR/UNTBR_CND4/OUT_D.CV' = 0 THEN
'^/IP_S_T3.CV'    := '//#UM#/TC0030.CV' + "".X >= FP_UNTERBR_TSL : "" + '//#TC0030#/B/A/PV.CV'  + "" >= "" +  ( '^/FP_UNTERBR_TSL.CV' )  ;
ELSE
'^/IP_S_T3.CV'    := '//#UM#/TC0030.CV' + "".X >= FP_UNTERBR_TSL + HYS : "" + '//#TC0030#/B/A/PV.CV'  + "" >= "" +  ( '^/FP_UNTERBR_TSL.CV'  + '/+/IP_TC_HYS.CV' ) ;
ENDIF;
'^/IP_TR3_T.CV' :=  ('^/FAIL_MONITOR/UNTBR_CND4/OUT_D.CV' = 0 ) ;

IF '^/FAIL_MONITOR/UNTBR_CND5/OUT_D.CV' = 0 THEN
'^/IP_S_T4.CV'    := '//#UM#/TC0030.CV' + "".X <= FP_UNTERBR_TSH : "" + '//#TC0030#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_TSH.CV' )  ;
ELSE
'^/IP_S_T4.CV'    := '//#UM#/TC0030.CV' + "".X <= FP_UNTERBR_TSH - HYS : "" + '//#TC0030#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_TSH.CV' - '/+/IP_TC_HYS.CV' )  ;
ENDIF;
'^/IP_TR4_T.CV' := ('^/FAIL_MONITOR/UNTBR_CND5/OUT_D.CV' = 0 ) ;

'^/IP_S_T5.CV'    := ""Gasstation i.O."";
'^/IP_TR5_T.CV' := ('/+/DY_GASST_OK' = 0 OR   '/+/DY_GASST_OK.$REF'  = """");
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S41"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=860 Y=3645 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S41/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S41/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S42"
    {
      DESCRIPTION="Meldung 6"
      RECTANGLE= { X=850 Y=3745 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Dosieren Gas Beenden"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
   '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FRAGE_TEXT.CV' := ""Dosieren Gas fortfahren ?"";
'^/IP_FRAGE_JA.CV'      := 1;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=  ""Dosieren Gas fortfahren quittiert""   ; 
'^/IP_TR1_T.CV'  := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S42/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S42/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S42/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S43"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=860 Y=3835 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="Texte Ruecksetzen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV'      := 0;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S43/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S43/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S43/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S44"
    {
      DESCRIPTION="PAR_INI"
      RECTANGLE= { X=840 Y=3925 H=20 W=100 }
      ACTION NAME="A2"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S44/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S44/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S45"
    {
      DESCRIPTION="Regler+Weg Aus"
      RECTANGLE= { X=550 Y=3365 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#PC0020B#/B/SW_ROUT.CV'       := 0;
'//#PC0020B#/B/A/MODE.TARGET' := ROUT;
'//#PC0020B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="FC1705  ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1705#/B/SW_ROUT.CV'       := 0;
'//#FC1705#/B/A/MODE.TARGET' := ROUT;
'//#FC1705#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        DESCRIPTION="FC1725 ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1725#/B/SW_ROUT.CV'       := 0;
'//#FC1725#/B/A/MODE.TARGET' := ROUT;
'//#FC1725#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A5"
      {
        DESCRIPTION="TC0030B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#TC0030B#/B/SW_ROUT.CV'       := 0;
'//#TC0030B#/B/A/MODE.TARGET' := ROUT;
'//#TC0030B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        DESCRIPTION="Empfang Weg V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A7"
      {
        DESCRIPTION="Empfang Weg V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A8"
      {
        DESCRIPTION="Empfang Weg V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_SW_CAS2' := 'vlvnc-sp:CLOSE';"
        DELAY_TIME=0
      }
      ACTION NAME="A9"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_SW_CAS2' := 0;
'^/DY_E_VF_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A11"
      {
        DESCRIPTION="Reaktionszeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=   ""Ventil"" + '/+/ST_E_V1' + "" geschlossen"";
'^/IP_TR1_T' := ('^/DY_E_V1_GESCHL' = 1  OR '^/DY_E_V1.IGN' = 1);

'^/IP_S_T2.CV'    :=  ""Ventil"" + '/+/ST_E_V2'  + "" geschlossen"";
'^/IP_TR2_T' := ('^/DY_E_V2_GESCHL' = 1  OR '^/DY_E_V2.IGN' = 1 );

'^/IP_S_T3.CV'    :=  ""Ventil"" + '/+/ST_E_V3'  + "" geschlossen"";
'^/IP_TR3_T' := ('^/DY_E_V3_GESCHL' = 1  OR '^/DY_E_V3.IGN' = 1);

'^/IP_S_T4.CV'    :=  ""Ventil"" + '/+/ST_E_VF'  + "" geschlossen"";
'^/IP_TR4_T' := ('^/DY_E_VF_GESCHL' = 1  OR '^/DY_E_VF.IGN' = 1 );

'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S45/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A4/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A6/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A7/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A8/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A9/STATE.CV' <> '$sfc_action_states:Complete' OR
'S45/A11/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S45/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S46"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=570 Y=2975 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S47"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=560 Y=3065 H=20 W=80 }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL'                               := -999999;"
        DELAY_TIME=0
      }
      ACTION NAME="A10"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="A13"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 0;
'^/TASTE_1_AKTIV.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S47/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S47/A10/STATE.CV' <> '$sfc_action_states:Complete' OR
'S47/A13/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S47/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S48"
    {
      DESCRIPTION="FQ Resettieren"
      RECTANGLE= { X=200 Y=1055 H=20 W=100 }
      ACTION NAME="A2"
      {
        DESCRIPTION="FLAG FQ RESET Setzen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FLAG_FQ_RESET.CV' = 0 THEN
   '/+/DY_E_FQ_RESET.CV'  := 1;
   '^/DY_E_FQ_EIN.CV' := 0;
    '^/FLAG_FQ_RESET.CV' := 1;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S48/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S48/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S49"
    {
      DESCRIPTION="PAR_INI"
      RECTANGLE= { X=200 Y=560 H=20 W=100 }
      ACTION NAME="PARAM"
      {
        DESCRIPTION="PARAM"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_PC_HYS.CV' :=  '//#PC0020#/B/A/ALARM_HYS.CV' *  ( '//#PC0020#/B/A/PV_SCALE.EU100' - '//#PC0020#/B/A/PV_SCALE.EU0' ) / 100;
'^/IP_TC_HYS.CV' :=  '//#TC0030#/B/A/ALARM_HYS.CV' *  ( '//#TC0030#/B/A/PV_SCALE.EU100' - '//#TC0030#/B/A/PV_SCALE.EU0' ) / 100;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="A1"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 0;
'^/TASTE_1_AKTIV.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        DESCRIPTION="Empfang V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_MODE_F'    := CAS;
'^/DY_E_V1_MODE_T'    := CAS;
'^/DY_E_V1_CAS2_FRE' := 1;
'^/DY_E_V1_SW_CAS2'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A5"
      {
        DESCRIPTION="Empfang V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_MODE_F'     := CAS;
'^/DY_E_V2_MODE_T'     := CAS;
'^/DY_E_V2_CAS2_FRE' := 1;
'^/DY_E_V2_SW_CAS2'   := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        DESCRIPTION="Empfang V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_MODE_F'    := CAS;
'^/DY_E_V3_MODE_T'    := CAS;
'^/DY_E_V3_CAS2_FRE' := 1;
'^/DY_E_V3_SW_CAS2'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A7"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_MODE_F'     := CAS;
'^/DY_E_VF_MODE_T'     := CAS;
'^/DY_E_VF_CAS2_FRE'  := 1;
'^/DY_E_VF_SW_CAS2'   := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A8"
      {
        DESCRIPTION="Empfang FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FQ_MODE_F'     := CAS;
'^/DY_E_FQ_MODE_T'     := CAS;
'^/DY_E_FQ_CAS2_FRE' := 1;
'^/DY_E_FQ_SW_CAS2'   := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="Empfang FC Parameter"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AH'    := '^/FP_FAH_GAS.CV';
'^/DY_E_FC_AHH' := '^/FP_FAHH_GAS.CV';

'//#_HOLD#/FCAHH_AKT.CV'  := 1"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S49/PARAM/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A4/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A6/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A7/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A8/STATE.CV' <> '$sfc_action_states:Complete' OR
'S49/A3/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S49/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S5"
    {
      DESCRIPTION="Zeit"
      RECTANGLE= { X=1210 Y=2715 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Zeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/FAL_SETZEIT/RESET_IN.CV' := 1;
'^/FAIL_MONITOR/FAL_SETZEIT/IN_D.CV'           := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        DESCRIPTION="Alarm an Regler"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL' := '^/FP_FAL_GAS.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S5/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S5/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S5/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S50"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=570 Y=3165 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S50/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S50/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S51"
    {
      DESCRIPTION="DY_REF OK"
      RECTANGLE= { X=200 Y=170 H=20 W=100 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Dynamische Referenzen Gas Station "" + '^/ST_GASST.CV' + "" i.O."";
'^/IP_TR1_T' :=  ('^/IP_DY_GASST_CST.CV' = 0);

'^/IP_S_T2.CV'    := ""Dynamische Referenzen Gas Weg "" + '^/ST_GAS_WEG.CV' + "" i.O."";
'^/IP_TR2_T' := ('^/IP_DY_E_CST.CV' = 0 AND '^/IP_DY_E_FC_CST.CV' = 0 AND '^/IP_DY_E_FQ_CST.CV' = 0 AND '^/IP_DY_E_V_1_CST.CV' = 0 AND '^/IP_DY_E_V_2_CST.CV' = 0 AND '^/IP_DY_E_V_3_CST.CV' = 0 AND '^/"
	"IP_DY_E_V_FQ_CST.CV' = 0 );

'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S52"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=690 Y=3165 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FC_SCHL_RAMPE.CV' :=  ( 100  * '^/IP_ZYKLUS_ZEIT.CV' )  / '^/FP_FC_SCHLIESS_Z.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := '^/DY_E_FC_BKCAL_IN';
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       :=  '/+/DY_E_FC_SW_ROUT.CV'    - '^/IP_FC_SCHL_RAMPE.CV';"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Ausgang Regler "" + '^/ST_E_FC.CV' + "" <= 0 : "" + '^/DY_E_FC_SW_ROUT' + "" <= 0"" ;
'^/IP_TR1_T.CV' :=  ( '^/DY_E_FC_SW_ROUT' <= 0 ) ;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S52/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S52/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S52/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S53"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=210 Y=3065 H=20 W=80 }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL'                               := -999999;"
        DELAY_TIME=0
      }
      ACTION NAME="A10"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="A13"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 0;
'^/TASTE_1_AKTIV.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S53/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A10/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A13/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S54"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=3165 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S54/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S54/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S55"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=3165 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FC_SCHL_RAMPE.CV' :=  ( 100  * '^/IP_ZYKLUS_ZEIT.CV' )  / '^/FP_FC_SCHLIESS_Z.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := '^/DY_E_FC_BKCAL_IN';
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       :=  '/+/DY_E_FC_SW_ROUT.CV'    - '^/IP_FC_SCHL_RAMPE.CV';"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Ausgang Regler "" + '^/ST_E_FC.CV' + "" <= 0 : "" + '^/DY_E_FC_SW_ROUT' + "" <= 0"" ;
'^/IP_TR1_T.CV' :=  ( '^/DY_E_FC_SW_ROUT' <= 0 ) ;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S55/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S55/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S55/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S56"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=3255 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S56/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S56/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S57"
    {
      DESCRIPTION=" Weg Oeffnen"
      RECTANGLE= { X=210 Y=1585 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Empfang Weg V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_SW_CAS2' := 'vlvnc-sp:OPEN';"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        DESCRIPTION="Empfang Weg V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_SW_CAS2' := 'vlvnc-sp:OPEN';"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="Empfang Weg V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_SW_CAS2' := 'vlvnc-sp:OPEN';"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S57/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S57/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S57/A3/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S57/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S58"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=860 Y=2975 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S59"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=850 Y=3065 H=20 W=80 }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL'                               := -999999;"
        DELAY_TIME=0
      }
      ACTION NAME="A13"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 0;
'^/TASTE_1_AKTIV.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S59/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S59/A13/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S59/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S6"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=350 Y=1425 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
   '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S6/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S6/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S6/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S60"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=980 Y=3165 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FC_SCHL_RAMPE.CV' :=  ( 100  * '^/IP_ZYKLUS_ZEIT.CV' )  / '^/FP_FC_SCHLIESS_Z.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := '^/DY_E_FC_BKCAL_IN';
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       :=  '/+/DY_E_FC_SW_ROUT.CV'    - '^/IP_FC_SCHL_RAMPE.CV';"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Ausgang Regler "" + '^/ST_E_FC.CV' + "" <= 0 : "" + '^/DY_E_FC_SW_ROUT' + "" <= 0"" ;
'^/IP_TR1_T.CV' :=  ( '^/DY_E_FC_SW_ROUT' <= 0 ) ;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S60/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S60/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S60/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S61"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=980 Y=3255 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S61/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S61/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S62"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=860 Y=3545 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S63"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=1080 Y=3065 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
   '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="FSB Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV'      := 0;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV'  :=  0;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S63/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S63/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S63/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S64"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=1070 Y=3165 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Dosieren Gas Beenden"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
   '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="Message: Transfer starten"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/FAIL_MONITOR/UNTERB_ERSTS.CV' = 1 THEN
   '^/IP_MELDE_TEXT.CV' := ""Unterbruch SW Taste -> Dosieren Gas Unterbruch "";

ELSE IF '^/FAIL_MONITOR/UNTERB_ERSTS.CV' = 2 THEN
   '^/IP_PC_SL.CV' := '^/IP_PC_SL.CV' + '//#PC0020#/B/A/ALARM_HYS.CV' *  ( '//#PC0020#/B/A/PV_SCALE.EU100' - '//#PC0020#/B/A/PV_SCALE.EU0' ) / 100;
   '^/IP_MELDE_TEXT.CV' := ""Druck tief -> Dosiern Gas Unterbruch "";

ELSE IF '^/FAIL_MONITOR/UNTERB_ERSTS.CV' = 4 THEN
   '^/IP_PC_SH.CV' := '^/IP_PC_SH.CV' - '//#PC0020#/B/A/ALARM_HYS.CV' *  ( '//#PC0020#/B/A/PV_SCALE.EU100' - '//#PC0020#/B/A/PV_SCALE.EU0' ) / 100;
   '^/IP_MELDE_TEXT.CV' := ""Druck hoch -> Dosieren Gas Unterbruch "";
   
ELSE IF '^/FAIL_MONITOR/UNTERB_ERSTS.CV' = 8 THEN
  '^/IP_TC_SL.CV' := '^/IP_TC_SL.CV' + '//#TC0030#/B/A/ALARM_HYS.CV' *  ( '//#TC0030#/B/A/PV_SCALE.EU100' - '//#TC0030#/B/A/PV_SCALE.EU0' ) / 100;
  '^/IP_MELDE_TEXT.CV' := ""Temp tief -> Dosieren Gas Unterbruch "";
 
ELSE IF '^/FAIL_MONITOR/UNTERB_ERSTS.CV' = 16 THEN
  '^/IP_TC_SH.CV' := '^/IP_TC_SH.CV' - '//#TC0030#/B/A/ALARM_HYS.CV' *  ( '//#TC0030#/B/A/PV_SCALE.EU100' - '//#TC0030#/B/A/PV_SCALE.EU0' ) / 100;
   '^/IP_MELDE_TEXT.CV' := ""Temp hoch -> Dosieren Gas Unterbruch "";

ELSE IF '^/FAIL_MONITOR/UNTERB_ERSTS.CV' = 32 THEN
    '^/IP_MELDE_TEXT.CV' := ""Gas Station nicht i.O. -> Dosieren Gas Unterbruch "";
    
ELSE
    '^/IP_MELDE_TEXT.CV' := ""Mehrere Bed. aktiv : ERSTSIGNAL = "" + '^/FAIL_MONITOR/UNTERB_ERSTS.CV' + "" -> Dosieren Gas Unterbruch "";

END_IF;
END_IF;
END_IF;
END_IF;
END_IF;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S64/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S64/A3/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S64/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S65"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=770 Y=3065 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
   '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="FSB Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV'      := 0;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV'  :=  0;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S65/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S65/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S65/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S66"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=760 Y=3165 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Dosieren Gas Beenden"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
   '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := ""Menge Gas zu hoch !"";"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S66/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S66/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S66/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S67"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=2975 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S68"
    {
      DESCRIPTION="Flags"
      RECTANGLE= { X=200 Y=470 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FLAG_DYN_REF_OK.CV'  := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FLAG_DYN_REF_BER.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S68/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S68/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S68/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S69"
    {
      DESCRIPTION="Sub Grafik löschen"
      RECTANGLE= { X=200 Y=3835 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_GASST'  := """";"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_W_STATUS' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S69/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S69/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S69/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S7"
    {
      DESCRIPTION="Meldung 2"
      RECTANGLE= { X=340 Y=1350 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Transfer starten"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 

      '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := ""Startbedingungen nicht i. O. !"";"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="IF '^/FAIL_MONITOR/UNTBR_CND2/OUT_D.CV' = 0 THEN
'^/IP_S_T1.CV'    := '//#UM#/PC0020.CV' + "".X >= FP_UNTERBR_PSL : "" + '//#PC0020#/B/A/PV.CV'  + "" >= "" + ( '^/FP_UNTERBR_PSL.CV'  );
ELSE
'^/IP_S_T1.CV'    := '//#UM#/PC0020.CV' + "".X >= FP_UNTERBR_PSL + HYS : "" + '//#PC0020#/B/A/PV.CV'  + "" >= "" + ( '^/FP_UNTERBR_PSL.CV'    + '/+/IP_PC_HYS.CV' );
ENDIF;
'^/IP_TR1_T.CV' :=    ( '^/FAIL_MONITOR/UNTBR_CND2/OUT_D.CV' = 0 ) ;

IF '^/FAIL_MONITOR/UNTBR_CND3/OUT_D.CV' = 0 THEN
'^/IP_S_T2.CV'    := '//#UM#/PC0020.CV' + "".X <= FP_UNTERBR_PSH : "" + '//#PC0020#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_PSH.CV'  ) ;
ELSE
'^/IP_S_T2.CV'    := '//#UM#/PC0020.CV' + "".X <= FP_UNTERBR_PSH - HYS : "" + '//#PC0020#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_PSH.CV'   - '/+/IP_PC_HYS.CV' ) ;
ENDIF;
'^/IP_TR2_T.CV' :=  ( '^/FAIL_MONITOR/UNTBR_CND3/OUT_D.CV' = 0 ) ;

IF '^/FAIL_MONITOR/UNTBR_CND4/OUT_D.CV' = 0 THEN
'^/IP_S_T3.CV'    := '//#UM#/TC0030.CV' + "".X >= FP_UNTERBR_TSL : "" + '//#TC0030#/B/A/PV.CV'  + "" >= "" +  ( '^/FP_UNTERBR_TSL.CV' )  ;
ELSE
'^/IP_S_T3.CV'    := '//#UM#/TC0030.CV' + "".X >= FP_UNTERBR_TSL + HYS : "" + '//#TC0030#/B/A/PV.CV'  + "" >= "" +  ( '^/FP_UNTERBR_TSL.CV'  + '/+/IP_TC_HYS.CV' ) ;
ENDIF;
'^/IP_TR3_T.CV' :=  ('^/FAIL_MONITOR/UNTBR_CND4/OUT_D.CV' = 0 ) ;

IF '^/FAIL_MONITOR/UNTBR_CND5/OUT_D.CV' = 0 THEN
'^/IP_S_T4.CV'    := '//#UM#/TC0030.CV' + "".X <= FP_UNTERBR_TSH : "" + '//#TC0030#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_TSH.CV' )  ;
ELSE
'^/IP_S_T4.CV'    := '//#UM#/TC0030.CV' + "".X <= FP_UNTERBR_TSH - HYS : "" + '//#TC0030#/B/A/PV.CV'  + "" <= "" +  ( '^/FP_UNTERBR_TSH.CV' - '/+/IP_TC_HYS.CV' )  ;
ENDIF;
'^/IP_TR4_T.CV' := ('^/FAIL_MONITOR/UNTBR_CND5/OUT_D.CV' = 0 ) ;

'^/IP_S_T5.CV'    := ""Gasstation i.O."";
'^/IP_TR5_T.CV' := ('/+/DY_GASST_OK' = 0 OR   '/+/DY_GASST_OK.$REF'  = """");
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S7/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S7/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S7/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S70"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=440 Y=3165 H=20 W=60 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S71"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=200 Y=3925 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/DY_E_FQ.IGN' = 0 THEN
  '//#UM#/GAS_FQ.CV' := '^/DY_E_FQ_X';
  '^/RP_FQ.CV' := '^/DY_E_FQ_X';
ELSE
  '//#UM#/GAS_FQ.CV' := 0;
  '^/RP_FQ.CV' := 0;
END_IF"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S71/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S71/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S72"
    {
      DESCRIPTION="SUB GRAFIK ERSTELLEN"
      RECTANGLE= { X=200 Y=380 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_W_STATUS' := 1"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_GASST'  := '^/ST_GASST.CV';"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S72/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S72/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S72/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S73"
    {
      RECTANGLE= { X=210 Y=1670 H=20 W=80 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="A1"
      {
        DESCRIPTION="RP_YS_AUF_ZEIT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF ('^/FLAG_YS_AUF_ZEIT'=0) THEN
	'^/FLAG_YS_AUF_ZEIT':=1;
	'^/RP_YS_AUF_ZEIT.CV':=TIME('$time_format:UTC');
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S73/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S73/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S74"
    {
      DESCRIPTION="Meldung 1"
      RECTANGLE= { X=460 Y=250 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="BE Meldung"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
      '^/REQUEST.CV' := 3401;
   END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := ""Berechnung dynamischer Referenzen nicht i.O. "";
'^/IP_FRAGE_TEXT.CV'  :=  """";
'^/IP_FRAGE_JA.CV'       := 0;
'^/IP_FRAGE_NEIN.CV'   := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Dynamische Referenzen Gas Station "" + '^/ST_GASST.CV' + "" i.O."";
'^/IP_TR1_T' :=  ('^/IP_DY_GASST_CST.CV' = 0);

'^/IP_S_T2.CV'    := ""Dynamische Referenzen Gas Weg "" + '^/ST_GAS_WEG.CV' + "" i.O."";
'^/IP_TR2_T' := ('^/IP_DY_E_CST.CV' = 0 AND '^/IP_DY_E_FC_CST.CV' = 0 AND '^/IP_DY_E_FQ_CST.CV' = 0 AND '^/IP_DY_E_V_1_CST.CV' = 0 AND '^/IP_DY_E_V_2_CST.CV' = 0 AND '^/IP_DY_E_V_3_CST.CV' = 0 AND '^/"
	"IP_DY_E_V_FQ_CST.CV' = 0 );

'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;

'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S74/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S74/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S74/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S75"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=385 Y=755 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Eingabe"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FSB_FQ_GAS.CV' := '^/IP_EINGABE.CV';
'^/IP_EINGABE_FLAG.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S75/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S75/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S75/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S76"
    {
      DESCRIPTION="Mldg Loeschen"
      RECTANGLE= { X=460 Y=330 H=20 W=80 }
      ACTION NAME="A2"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S76/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S76/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S76/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S77"
    {
      RECTANGLE= { X=200 Y=280 H=20 W=100 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Dynamische Referenzen Gas Station "" + '^/ST_GASST.CV' + "" i.O."";
'^/IP_TR1_T' :=  ('^/IP_DY_GASST_CST.CV' = 0);

'^/IP_S_T2.CV'    := ""Dynamische Referenzen Gas Weg "" + '^/ST_GAS_WEG.CV' + "" i.O."";
'^/IP_TR2_T' := ('^/IP_DY_E_CST.CV' = 0 AND '^/IP_DY_E_FC_CST.CV' = 0 AND '^/IP_DY_E_FQ_CST.CV' = 0 AND '^/IP_DY_E_V_1_CST.CV' = 0 AND '^/IP_DY_E_V_2_CST.CV' = 0 AND '^/IP_DY_E_V_3_CST.CV' = 0 AND '^/"
	"IP_DY_E_V_FQ_CST.CV' = 0 );

'^/IP_S_T3.CV'    := ""Wartezeit abgelaufen : "" + 'S77/TIME.CV'  + "" > 5"";
'^/IP_TR3_T' := ('S77/TIME.CV'  > 5);

'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S78"
    {
      DESCRIPTION="Meldung 1"
      RECTANGLE= { X=375 Y=665 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Menge GF Gas"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
  '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF ('^/FP_FSB_FQ_GAS.CV' <= '^/FP_FQ_SH_GAS.CV') THEN
	'^/IP_FRAGE_TEXT.CV' := ""Menge <= "" + '^/FP_FSB_FQ_GAS.CV' + "" eingeben und mit QUITT quittieren"";
ELSE
	'^/IP_FRAGE_TEXT.CV' := ""Menge <= "" + '^/FP_FQ_SH_GAS.CV' + "" eingeben und mit QUITT quittieren"";
END_IF;

'^/IP_FRAGE_JA.CV'      := 0;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV' := 1;
'^/IP_EINGABE.CV' := 0;
'^/IP_EINGABE_FLAG.CV' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""GF Dosieren GAS"";
'^/IP_TR1_T.CV'  := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S78/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S78/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S78/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S79"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=385 Y=950 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FP_FSB_FQ_GAS.CV' := '^/IP_FSB_FQ_GAS.CV';"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S79/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S79/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S79/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S79/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S8"
    {
      DESCRIPTION="Unterbr Deakt"
      RECTANGLE= { X=200 Y=1505 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "" ;
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := """" ; 
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S8/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S8/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S80"
    {
      DESCRIPTION="Meldung 1"
      RECTANGLE= { X=375 Y=850 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: Menge GF Gas"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
  '^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := ""Menge = "" + '^/IP_FSB_FQ_GAS.CV';
'^/IP_FRAGE_TEXT.CV' := ""Dosieren GAS starten ?"";
'^/IP_FRAGE_JA.CV'      := 1;
'^/IP_FRAGE_NEIN.CV'  := 1;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV'  := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S80/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S80/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S80/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S81"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=570 Y=950 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'        := 0;
'^/IP_FRAGE_NEIN.CV'    := 0;
'^/IP_FRAGE_QUITT.CV'  := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S81/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S81/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S81/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    STEP NAME="S9"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=3655 H=20 W=60 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 3401  AND '^/OWNER.CV'  !=  '$phase_owner_id:External' THEN
    '^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        DESCRIPTION="Texte Ruecksetzen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV'      := 0;
'^/IP_FRAGE_NEIN.CV'  := 0;
'^/IP_FRAGE_QUITT.CV'  :=  0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="FAIL_INDEX"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S9/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S9/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/FAIL_INDEX.CV' := 'phase_failures:ACTION COMPLETE FAILED';
ENDIF;"
        DELAY_EXPRESSION="'S9/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_RUN.CV'"
      }
    }
    INITIAL_STEP="S1"
    TRANSITION NAME="T1"
    {
      DESCRIPTION="OK"
      POSITION= { X=880 Y=3965 }
      TERMINATION=F
      EXPRESSION="'S44/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T10"
    {
      DESCRIPTION="OK"
      POSITION= { X=370 Y=1460 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S6/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S6/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T101"
    {
      POSITION= { X=490 Y=370 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0
OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S76/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S76/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T102"
    {
      POSITION= { X=240 Y=330 }
      TERMINATION=F
      EXPRESSION="'^/IP_DY_GASST_CST.CV' = 0 AND
'^/IP_DY_E_CST.CV' = 0 AND 
'^/IP_DY_E_FC_CST.CV' = 0 AND
'^/IP_DY_E_FQ_CST.CV' = 0 AND
'^/IP_DY_E_V_1_CST.CV' = 0 AND
'^/IP_DY_E_V_2_CST.CV' = 0 AND
'^/IP_DY_E_V_3_CST.CV' = 0 AND
'^/IP_DY_E_V_FQ_CST.CV' = 0 AND
'S77/TIME.CV'  > 5"
    }
    TRANSITION NAME="T103"
    {
      POSITION= { X=130 Y=330 }
      TERMINATION=F
      EXPRESSION="NOT ('^/IP_DY_GASST_CST.CV' = 0 AND
'^/IP_DY_E_CST.CV' = 0 AND 
'^/IP_DY_E_FC_CST.CV' = 0 AND
'^/IP_DY_E_FQ_CST.CV' = 0 AND
'^/IP_DY_E_V_1_CST.CV' = 0 AND
'^/IP_DY_E_V_2_CST.CV' = 0 AND
'^/IP_DY_E_V_3_CST.CV' = 0 AND
'^/IP_DY_E_V_FQ_CST.CV' = 0)"
    }
    TRANSITION NAME="T11"
    {
      DESCRIPTION="Unterbr OK"
      POSITION= { X=880 Y=3495 }
      TERMINATION=F
      EXPRESSION="'^/FAIL_MONITOR/UNTERBRUCH.CV' = 0"
    }
    TRANSITION NAME="T12"
    {
      DESCRIPTION="Unterbr Ok"
      POSITION= { X=370 Y=1390 }
      TERMINATION=F
      EXPRESSION="('^/FAIL_MONITOR/UNTERBRUCH.CV'  =  0)
AND
'S7/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S7/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T13"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=1540 }
      TERMINATION=F
      EXPRESSION="'S8/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T14"
    {
      DESCRIPTION="PC0020B ROUT"
      POSITION= { X=240 Y=1895 }
      TERMINATION=F
      EXPRESSION="(( '//#PC0020B#/B/A/MODE.ACTUAL' = ROUT  OR 
'/PC0020B.IGN' = 1 ))
AND
'S15/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T15"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=1975 }
      TERMINATION=F
      EXPRESSION="'S10/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T16"
    {
      DESCRIPTION="FC ROUT"
      POSITION= { X=240 Y=2045 }
      TERMINATION=F
      EXPRESSION="('/+/DY_E_FC_MODE.ACTUAL' = ROUT OR 
'/+/DY_E_FC.IGN' = 1)
AND
'S11/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T17"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=2115 }
      TERMINATION=F
      EXPRESSION="'S12/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T18"
    {
      DESCRIPTION="FC1705/ 1725 ROUT"
      POSITION= { X=240 Y=2185 }
      TERMINATION=F
      EXPRESSION="(( ( '//#FC1705#/B/A/MODE.ACTUAL' = ROUT  OR 
'/FC1705.IGN' = 1)

 AND 
('//#FC1725#/B/A/MODE.ACTUAL' = ROUT  OR 
'/FC1725.IGN' = 1) ))
AND
'S13/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T19"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=1165 }
      TERMINATION=F
      EXPRESSION="'S14/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T2"
    {
      POSITION= { X=240 Y=40 }
      TERMINATION=F
      EXPRESSION="('LC_GF_SUB_START/STATE.CV' = '$sfc_states:Sequence Completed'
AND
'^/IP_ZYKLUS_ZEIT.CV'  > 0)
AND
'S1/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S1/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S1/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S1/A6/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T20"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=240 Y=1725 }
      TERMINATION=F
      EXPRESSION="('^/FP_FSB_OPTION.CV' = 3)
AND
'S73/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T21"
    {
      DESCRIPTION="Manende Nein"
      POSITION= { X=350 Y=3525 }
      TERMINATION=F
      EXPRESSION="'^/FP_MANENDE.CV'  =  'L_JA_NEIN:NEIN'"
    }
    TRANSITION NAME="T22"
    {
      DESCRIPTION="Ende"
      POSITION= { X=240 Y=4075 }
      TERMINATION=T
      EXPRESSION="'S16/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T23"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=2250 }
      TERMINATION=F
      EXPRESSION="'S22/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T24"
    {
      DESCRIPTION="OK"
      POSITION= { X=880 Y=3685 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S41/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T25"
    {
      DESCRIPTION="Setzzeit abgelaufen"
      POSITION= { X=1230 Y=2685 }
      TERMINATION=F
      EXPRESSION="(( '^/FAIL_MONITOR/FAL_SETZEIT/ELAPSED_TIMER.CV' >= 60 ))
AND
'S25/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T26"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=2390 }
      TERMINATION=F
      EXPRESSION="'S23/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T27"
    {
      DESCRIPTION="Manstart Ja"
      POSITION= { X=240 Y=620 }
      TERMINATION=F
      EXPRESSION="('^/FP_MANSTART.CV'  =  'LGF_GAS_MANSTART:JA')
AND
'S49/PARAM/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A3/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T28"
    {
      DESCRIPTION="TC0030B ROUT"
      POSITION= { X=240 Y=2320 }
      TERMINATION=F
      EXPRESSION="(( '//#TC0030B#/B/A/MODE.ACTUAL' = ROUT  OR 
'/TC0030B.IGN' = 1 ))
AND
'S24/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T29"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=805 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' OR 
'^/FP_MANSTART.CV'  =  'L_JA_NEIN:NEIN' ))
AND
'S2/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S2/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T3"
    {
      DESCRIPTION="FQ>X"
      POSITION= { X=670 Y=1320 }
      TERMINATION=F
      EXPRESSION="'/+/DY_E_FQ_X' > '^/FP_FQ_SH_GAS.CV'
AND 
'/+/DY_E_FQ.IGN' = 0"
    }
    TRANSITION NAME="T30"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=2460 }
      TERMINATION=F
      EXPRESSION="'S18/FAL_SETZEIT/STATE.CV' = '$sfc_action_states:Complete' AND
'S18/UNTERBR_SW_TASTE/STATE.CV' = '$sfc_action_states:Complete' AND
'S18/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S18/REAKTIONSZEIT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T31"
    {
      DESCRIPTION="Unterbr Angespr"
      POSITION= { X=960 Y=2665 }
      TERMINATION=F
      EXPRESSION="('^/FAIL_MONITOR/UNTERBRUCH.CV'  = 1)
AND
'S25/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T32"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=2760 }
      TERMINATION=F
      EXPRESSION="('^/FP_MANABBR.CV' = 'L_JA_NEIN:NEIN')
AND
'S26/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T33"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=880 Y=3125 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' = 0)
AND
'S59/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S59/A13/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T34"
    {
      DESCRIPTION="FSB"
      POSITION= { X=240 Y=2560 }
      TERMINATION=F
      EXPRESSION="((( '^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:ZEIT - Reaktionszeit'  AND 
'^/FAIL_MONITOR/REAKTIONSZEIT/ELAPSED_TIMER.CV' >= '^/FP_FSB_ZEIT.CV')

 OR 

('^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:DRUCK - Druck hoch und Reaktionszeit'  AND 
'^/FAIL_MONITOR/REAKTIONSZEIT/ELAPSED_TIMER.CV' >= '^/FP_FSB_ZEIT.CV' AND 
'//#PC0020#/B/A/PV.CV' >= '^/FP_FSB_PSH.CV')

 OR 

('^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:MENGE - Menge und Reaktionszeit'  AND 
'^/FAIL_MONITOR/REAKTIONSZEIT/ELAPSED_TIMER.CV' >= '^/FP_FSB_ZEIT.CV' AND 
'/+/DY_E_FQ_X' >= '^/FP_FSB_FQ_GAS.CV')

 OR 

('^/FP_FSB_OPTION.CV' = 'LGF_GAS_OPT:DURCHFLUSS - Durchfluss tief und Reaktionszeit'  AND 
'^/FAIL_MONITOR/REAKTIONSZEIT/ELAPSED_TIMER.CV' >= '^/FP_FSB_ZEIT.CV' AND 
'/+/DY_E_FC_X' <= '^/FP_FSB_FSL_GAS.CV')))
AND
'S25/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T35"
    {
      DESCRIPTION="Man Abbr"
      POSITION= { X=460 Y=2755 }
      TERMINATION=F
      EXPRESSION="('^/FP_MANABBR.CV' = 'L_JA_NEIN:JA')
AND
'S26/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T36"
    {
      DESCRIPTION="OK"
      POSITION= { X=460 Y=3125 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S27/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S27/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T37"
    {
      DESCRIPTION=" Ok"
      POSITION= { X=460 Y=2830 }
      TERMINATION=F
      EXPRESSION="'S28/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S28/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T38"
    {
      DESCRIPTION="Unterbr Angespr"
      POSITION= { X=880 Y=2925 }
      TERMINATION=F
      EXPRESSION="('^/FAIL_MONITOR/UNTERBRUCH.CV'  = 1)
AND
'S30/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T39"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=1235 }
      TERMINATION=F
      EXPRESSION="'S3/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T4"
    {
      DESCRIPTION="OK"
      POSITION= { X=880 Y=3415 }
      TERMINATION=F
      EXPRESSION="(('^/DY_E_V1_GESCHL' = 1 OR '^/DY_E_V1.IGN' = 1) AND 
('^/DY_E_V2_GESCHL' = 1 OR '^/DY_E_V2.IGN' = 1) AND  
('^/DY_E_V3_GESCHL' = 1 OR '^/DY_E_V3.IGN' = 1) AND 
('^/DY_E_VF_GESCHL' = 1 OR '^/DY_E_VF.IGN' = 1))
AND
'S17/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A9/STATE.CV' = '$sfc_action_states:Complete' AND
'S17/A11/STATE.CV' = '$sfc_action_states:Complete' AND
'S64/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S64/A3/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T40"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=460 Y=2925 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_JA.CV' = 0)
AND
'S30/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T41"
    {
      DESCRIPTION="FQ>X"
      POSITION= { X=590 Y=2925 }
      TERMINATION=F
      EXPRESSION="('/+/DY_E_FQ_X' > '^/FP_FQ_SH_GAS.CV' AND '/+/DY_E_FQ.IGN' = 0)
AND
'S30/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T42"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=240 Y=3415 }
      TERMINATION=F
      EXPRESSION="(('^/DY_E_V1_GESCHL' = 1 OR '^/DY_E_V1.IGN' = 1) AND 
('^/DY_E_V2_GESCHL' = 1 OR '^/DY_E_V2.IGN' = 1) AND  
('^/DY_E_V3_GESCHL' = 1 OR '^/DY_E_V3.IGN' = 1) AND 
('^/DY_E_VF_GESCHL' = 1 OR '^/DY_E_VF.IGN' = 1))
AND
'S34/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A9/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A11/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T43"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=3695 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' OR 
'^/FP_MANENDE.CV'  =  'L_JA_NEIN:NEIN' ))
AND
'S9/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S9/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T44"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=240 Y=3605 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_JA.CV' = 0)
AND
'S32/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S32/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T45"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=3785 }
      TERMINATION=F
      EXPRESSION="'S33/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T46"
    {
      DESCRIPTION="OK"
      POSITION= { X=590 Y=3415 }
      TERMINATION=F
      EXPRESSION="(('^/DY_E_V1_GESCHL' = 1 OR '^/DY_E_V1.IGN' = 1) AND 
('^/DY_E_V2_GESCHL' = 1 OR '^/DY_E_V2.IGN' = 1) AND  
('^/DY_E_V3_GESCHL' = 1 OR '^/DY_E_V3.IGN' = 1) AND 
('^/DY_E_VF_GESCHL' = 1 OR '^/DY_E_VF.IGN' = 1))
AND
'S45/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A9/STATE.CV' = '$sfc_action_states:Complete' AND
'S45/A11/STATE.CV' = '$sfc_action_states:Complete' AND
'S66/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S66/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T47"
    {
      DESCRIPTION="OK"
      POSITION= { X=590 Y=3515 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S36/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S36/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T48"
    {
      DESCRIPTION="FQ>X"
      POSITION= { X=540 Y=2675 }
      TERMINATION=F
      EXPRESSION="('/+/DY_E_FQ_X' > '^/FP_FQ_SH_GAS.CV' AND '/+/DY_E_FQ.IGN' = 0)
AND
'S25/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T49"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=590 Y=3605 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_JA.CV' = 0)
AND
'S37/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S37/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T5"
    {
      DESCRIPTION="Unterbr 1"
      POSITION= { X=370 Y=1320 }
      TERMINATION=F
      EXPRESSION="'^/FAIL_MONITOR/UNTERBRUCH.CV'  = 1"
    }
    TRANSITION NAME="T50"
    {
      DESCRIPTION="OK"
      POSITION= { X=590 Y=3705 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S38/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S38/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T51"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=880 Y=3785 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_JA.CV' = 0)
AND
'S42/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S42/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T52"
    {
      DESCRIPTION="OK"
      POSITION= { X=880 Y=3875 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S43/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S43/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T53"
    {
      DESCRIPTION="Setzzeit abgelaufen"
      POSITION= { X=1210 Y=2945 }
      TERMINATION=F
      EXPRESSION="('^/FAIL_MONITOR/FAL_SETZEIT/ELAPSED_TIMER.CV' >= 60)
AND
'S30/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T54"
    {
      DESCRIPTION="OK"
      POSITION= { X=1210 Y=3025 }
      TERMINATION=F
      EXPRESSION="'S19/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S19/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T55"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=470 Y=1725 }
      TERMINATION=F
      EXPRESSION="('^/FP_FSB_OPTION.CV' <> 3)
AND
'S73/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T56"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=240 Y=1815 }
      TERMINATION=F
      EXPRESSION="'S20/V_FQ/STATE.CV' = '$sfc_action_states:Complete' AND
'S20/FQ/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T57"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=470 Y=1815 }
      TERMINATION=F
      EXPRESSION="'S21/V_FQ/STATE.CV' = '$sfc_action_states:Complete' AND
'S21/FQ/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T58"
    {
      POSITION= { X=710 Y=3215 }
      TERMINATION=F
      EXPRESSION="('^/DY_E_FC_SW_ROUT' <= 0)
AND
'S52/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S52/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T59"
    {
      DESCRIPTION="Manende Ja"
      POSITION= { X=240 Y=3525 }
      TERMINATION=F
      EXPRESSION="'^/FP_MANENDE.CV'  =  'L_JA_NEIN:JA'"
    }
    TRANSITION NAME="T6"
    {
      DESCRIPTION="Unterbr 0"
      POSITION= { X=240 Y=1315 }
      TERMINATION=F
      EXPRESSION="'^/FAIL_MONITOR/UNTERBRUCH.CV'  = 0 
AND 
('/+/DY_E_FQ_X' <= '^/FP_FQ_SH_GAS.CV'  OR '/+/DY_E_FQ.IGN' = 1)"
    }
    TRANSITION NAME="T60"
    {
      DESCRIPTION="Manstart Nein"
      POSITION= { X=760 Y=620 }
      TERMINATION=F
      EXPRESSION="('^/FP_MANSTART.CV'  =  'LGF_GAS_MANSTART:NEIN')
AND
'S49/PARAM/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A3/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T61"
    {
      DESCRIPTION="OK"
      POSITION= { X=590 Y=3015 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T62"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=590 Y=3125 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' = 0)
AND
'S47/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S47/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S47/A13/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T63"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=710 Y=3125 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' > 0)
AND
'S47/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S47/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S47/A13/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T64"
    {
      DESCRIPTION="> 10 Sek"
      POSITION= { X=240 Y=210 }
      TERMINATION=F
      EXPRESSION="'^/IP_DY_GASST_CST.CV' = 0 AND
'^/IP_DY_E_CST.CV' = 0 AND 
'^/IP_DY_E_FC_CST.CV' = 0 AND
'^/IP_DY_E_FQ_CST.CV' = 0 AND
'^/IP_DY_E_V_1_CST.CV' = 0 AND
'^/IP_DY_E_V_2_CST.CV' = 0 AND
'^/IP_DY_E_V_3_CST.CV' = 0 AND
'^/IP_DY_E_V_FQ_CST.CV' = 0"
    }
    TRANSITION NAME="T65"
    {
      POSITION= { X=590 Y=3215 }
      TERMINATION=F
      EXPRESSION="'S50/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T66"
    {
      POSITION= { X=710 Y=3295 }
      TERMINATION=F
      EXPRESSION="'S35/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T67"
    {
      DESCRIPTION="OK"
      POSITION= { X=880 Y=3015 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T68"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=240 Y=3125 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' = 0)
AND
'S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T69"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=360 Y=3125 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' > 0)
AND
'S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T7"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=240 Y=710 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_JA.CV' = 0)
AND
'S4/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S4/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T70"
    {
      POSITION= { X=240 Y=3215 }
      TERMINATION=F
      EXPRESSION="'S54/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T71"
    {
      POSITION= { X=360 Y=3215 }
      TERMINATION=F
      EXPRESSION="('^/DY_E_FC_SW_ROUT' <= 0)
AND
'S55/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S55/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T72"
    {
      POSITION= { X=360 Y=3295 }
      TERMINATION=F
      EXPRESSION="'S56/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T73"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=1000 Y=3125 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' > 0)
AND
'S59/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S59/A13/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T74"
    {
      POSITION= { X=880 Y=3215 }
      TERMINATION=F
      EXPRESSION="'S29/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T75"
    {
      POSITION= { X=1000 Y=3215 }
      TERMINATION=F
      EXPRESSION="('^/DY_E_FC_SW_ROUT' <= 0)
AND
'S60/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S60/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T76"
    {
      POSITION= { X=1000 Y=3295 }
      TERMINATION=F
      EXPRESSION="'S61/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T77"
    {
      POSITION= { X=990 Y=3605 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T78"
    {
      POSITION= { X=880 Y=3605 }
      TERMINATION=F
      EXPRESSION="'^/FP_MANUNTERBR.CV'  =  'L_JA_NEIN:JA' OR
'^/FAIL_MONITOR/UNTERB_ERSTS.CV' = 1"
    }
    TRANSITION NAME="T79"
    {
      DESCRIPTION="OK"
      POSITION= { X=1100 Y=3115 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S63/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S63/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T8"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=1095 }
      TERMINATION=F
      EXPRESSION="'S48/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T80"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=3975 }
      TERMINATION=F
      EXPRESSION="'S71/A1/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T81"
    {
      DESCRIPTION="OK"
      POSITION= { X=790 Y=3125 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
'S65/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S65/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T82"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=1630 }
      TERMINATION=F
      EXPRESSION="'S57/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S57/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S57/A3/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T83"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=3015 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T84"
    {
      DESCRIPTION="Manstart Nein"
      POSITION= { X=405 Y=615 }
      TERMINATION=F
      EXPRESSION="('^/FP_MANSTART.CV'  =  'LGF_GAS_MANSTART:JA MIT MAN FSB FQ' AND
'^/FP_FSB_OPTION.CV' = 3)
AND
'S49/PARAM/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S49/A3/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T85"
    {
      DESCRIPTION="OK"
      POSITION= { X=405 Y=805 }
      TERMINATION=F
      EXPRESSION="('^/IP_FSB_FQ_GAS.CV' <= '^/FP_FSB_FQ_GAS.CV' AND
'^/IP_FSB_FQ_GAS.CV' <= '^/FP_FQ_SH_GAS.CV')
AND
'S75/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S75/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T86"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=405 Y=710 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_QUITT.CV' = 0)
AND
'S78/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S78/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T87"
    {
      DESCRIPTION="OK"
      POSITION= { X=405 Y=990 }
      TERMINATION=F
      EXPRESSION="( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External' )
AND
'S79/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S79/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S79/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T88"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=405 Y=900 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_JA.CV' = 0)
AND
'S80/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S80/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T89"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=510 }
      TERMINATION=F
      EXPRESSION="'S68/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S68/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T9"
    {
      DESCRIPTION="OK"
      POSITION= { X=1230 Y=2755 }
      TERMINATION=F
      EXPRESSION="'S5/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S5/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T90"
    {
      DESCRIPTION="OK"
      POSITION= { X=665 Y=805 }
      TERMINATION=F
      EXPRESSION="'S75/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S75/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T91"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=3885 }
      TERMINATION=F
      EXPRESSION="'S69/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S69/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T92"
    {
      DESCRIPTION="OK"
      POSITION= { X=590 Y=985 }
      TERMINATION=F
      EXPRESSION="( '^/REQUEST.CV' = 0  OR 
'^/OWNER.CV' = '$phase_owner_id:External')
AND
'S81/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S81/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T93"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=590 Y=900 }
      TERMINATION=F
      EXPRESSION="('^/IP_FRAGE_NEIN.CV' = 0)
AND
'S80/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S80/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T96"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=420 }
      TERMINATION=F
      EXPRESSION="'S72/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S72/A2/STATE.CV' = '$sfc_action_states:Complete'"
    }
    TRANSITION NAME="T98"
    {
      DESCRIPTION="> 120 Sek"
      POSITION= { X=490 Y=220 }
      TERMINATION=F
      EXPRESSION="'S51/TIME.CV' >= 120"
    }
    TRANSITION NAME="T99"
    {
      POSITION= { X=490 Y=290 }
      TERMINATION=F
      EXPRESSION="('^/IP_DY_GASST_CST.CV' = 0 AND
'^/IP_DY_E_CST.CV' = 0 AND 
'^/IP_DY_E_FC_CST.CV' = 0 AND
'^/IP_DY_E_FQ_CST.CV' = 0 AND
'^/IP_DY_E_V_1_CST.CV' = 0 AND
'^/IP_DY_E_V_2_CST.CV' = 0 AND
'^/IP_DY_E_V_3_CST.CV' = 0 AND
'^/IP_DY_E_V_FQ_CST.CV' = 0)
AND
'S74/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S74/TEXT/STATE.CV' = '$sfc_action_states:Complete'"
    }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T2" { }
    STEP_TRANSITION_CONNECTION STEP="S10" TRANSITION="T15" { }
    STEP_TRANSITION_CONNECTION STEP="S11" TRANSITION="T16" { }
    STEP_TRANSITION_CONNECTION STEP="S12" TRANSITION="T17" { }
    STEP_TRANSITION_CONNECTION STEP="S13" TRANSITION="T18" { }
    STEP_TRANSITION_CONNECTION STEP="S14" TRANSITION="T19" { }
    STEP_TRANSITION_CONNECTION STEP="S15" TRANSITION="T14" { }
    STEP_TRANSITION_CONNECTION STEP="S16" TRANSITION="T22" { }
    STEP_TRANSITION_CONNECTION STEP="S17" TRANSITION="T4" { }
    STEP_TRANSITION_CONNECTION STEP="S18" TRANSITION="T30" { }
    STEP_TRANSITION_CONNECTION STEP="S19" TRANSITION="T54" { }
    STEP_TRANSITION_CONNECTION STEP="S2" TRANSITION="T29" { }
    STEP_TRANSITION_CONNECTION STEP="S20" TRANSITION="T56" { }
    STEP_TRANSITION_CONNECTION STEP="S21" TRANSITION="T57" { }
    STEP_TRANSITION_CONNECTION STEP="S22" TRANSITION="T23" { }
    STEP_TRANSITION_CONNECTION STEP="S23" TRANSITION="T26" { }
    STEP_TRANSITION_CONNECTION STEP="S24" TRANSITION="T28" { }
    STEP_TRANSITION_CONNECTION STEP="S25" TRANSITION="T31" { }
    STEP_TRANSITION_CONNECTION STEP="S25" TRANSITION="T34" { }
    STEP_TRANSITION_CONNECTION STEP="S25" TRANSITION="T48" { }
    STEP_TRANSITION_CONNECTION STEP="S25" TRANSITION="T25" { }
    STEP_TRANSITION_CONNECTION STEP="S26" TRANSITION="T32" { }
    STEP_TRANSITION_CONNECTION STEP="S26" TRANSITION="T35" { }
    STEP_TRANSITION_CONNECTION STEP="S27" TRANSITION="T36" { }
    STEP_TRANSITION_CONNECTION STEP="S28" TRANSITION="T37" { }
    STEP_TRANSITION_CONNECTION STEP="S29" TRANSITION="T74" { }
    STEP_TRANSITION_CONNECTION STEP="S3" TRANSITION="T39" { }
    STEP_TRANSITION_CONNECTION STEP="S30" TRANSITION="T40" { }
    STEP_TRANSITION_CONNECTION STEP="S30" TRANSITION="T38" { }
    STEP_TRANSITION_CONNECTION STEP="S30" TRANSITION="T41" { }
    STEP_TRANSITION_CONNECTION STEP="S30" TRANSITION="T53" { }
    STEP_TRANSITION_CONNECTION STEP="S31" TRANSITION="T6" { }
    STEP_TRANSITION_CONNECTION STEP="S31" TRANSITION="T5" { }
    STEP_TRANSITION_CONNECTION STEP="S31" TRANSITION="T3" { }
    STEP_TRANSITION_CONNECTION STEP="S32" TRANSITION="T44" { }
    STEP_TRANSITION_CONNECTION STEP="S33" TRANSITION="T45" { }
    STEP_TRANSITION_CONNECTION STEP="S34" TRANSITION="T42" { }
    STEP_TRANSITION_CONNECTION STEP="S35" TRANSITION="T66" { }
    STEP_TRANSITION_CONNECTION STEP="S36" TRANSITION="T47" { }
    STEP_TRANSITION_CONNECTION STEP="S37" TRANSITION="T49" { }
    STEP_TRANSITION_CONNECTION STEP="S38" TRANSITION="T50" { }
    STEP_TRANSITION_CONNECTION STEP="S39" TRANSITION="T21" { }
    STEP_TRANSITION_CONNECTION STEP="S39" TRANSITION="T59" { }
    STEP_TRANSITION_CONNECTION STEP="S4" TRANSITION="T7" { }
    STEP_TRANSITION_CONNECTION STEP="S40" TRANSITION="T11" { }
    STEP_TRANSITION_CONNECTION STEP="S41" TRANSITION="T24" { }
    STEP_TRANSITION_CONNECTION STEP="S42" TRANSITION="T51" { }
    STEP_TRANSITION_CONNECTION STEP="S43" TRANSITION="T52" { }
    STEP_TRANSITION_CONNECTION STEP="S44" TRANSITION="T1" { }
    STEP_TRANSITION_CONNECTION STEP="S45" TRANSITION="T46" { }
    STEP_TRANSITION_CONNECTION STEP="S46" TRANSITION="T61" { }
    STEP_TRANSITION_CONNECTION STEP="S47" TRANSITION="T62" { }
    STEP_TRANSITION_CONNECTION STEP="S47" TRANSITION="T63" { }
    STEP_TRANSITION_CONNECTION STEP="S48" TRANSITION="T8" { }
    STEP_TRANSITION_CONNECTION STEP="S49" TRANSITION="T27" { }
    STEP_TRANSITION_CONNECTION STEP="S49" TRANSITION="T60" { }
    STEP_TRANSITION_CONNECTION STEP="S49" TRANSITION="T84" { }
    STEP_TRANSITION_CONNECTION STEP="S5" TRANSITION="T9" { }
    STEP_TRANSITION_CONNECTION STEP="S50" TRANSITION="T65" { }
    STEP_TRANSITION_CONNECTION STEP="S51" TRANSITION="T98" { }
    STEP_TRANSITION_CONNECTION STEP="S51" TRANSITION="T64" { }
    STEP_TRANSITION_CONNECTION STEP="S52" TRANSITION="T58" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T68" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T69" { }
    STEP_TRANSITION_CONNECTION STEP="S54" TRANSITION="T70" { }
    STEP_TRANSITION_CONNECTION STEP="S55" TRANSITION="T71" { }
    STEP_TRANSITION_CONNECTION STEP="S56" TRANSITION="T72" { }
    STEP_TRANSITION_CONNECTION STEP="S57" TRANSITION="T82" { }
    STEP_TRANSITION_CONNECTION STEP="S58" TRANSITION="T67" { }
    STEP_TRANSITION_CONNECTION STEP="S59" TRANSITION="T33" { }
    STEP_TRANSITION_CONNECTION STEP="S59" TRANSITION="T73" { }
    STEP_TRANSITION_CONNECTION STEP="S6" TRANSITION="T10" { }
    STEP_TRANSITION_CONNECTION STEP="S60" TRANSITION="T75" { }
    STEP_TRANSITION_CONNECTION STEP="S61" TRANSITION="T76" { }
    STEP_TRANSITION_CONNECTION STEP="S62" TRANSITION="T78" { }
    STEP_TRANSITION_CONNECTION STEP="S62" TRANSITION="T77" { }
    STEP_TRANSITION_CONNECTION STEP="S63" TRANSITION="T79" { }
    STEP_TRANSITION_CONNECTION STEP="S64" TRANSITION="T4" { }
    STEP_TRANSITION_CONNECTION STEP="S65" TRANSITION="T81" { }
    STEP_TRANSITION_CONNECTION STEP="S66" TRANSITION="T46" { }
    STEP_TRANSITION_CONNECTION STEP="S67" TRANSITION="T83" { }
    STEP_TRANSITION_CONNECTION STEP="S68" TRANSITION="T89" { }
    STEP_TRANSITION_CONNECTION STEP="S69" TRANSITION="T91" { }
    STEP_TRANSITION_CONNECTION STEP="S7" TRANSITION="T12" { }
    STEP_TRANSITION_CONNECTION STEP="S70" TRANSITION="T42" { }
    STEP_TRANSITION_CONNECTION STEP="S71" TRANSITION="T80" { }
    STEP_TRANSITION_CONNECTION STEP="S72" TRANSITION="T96" { }
    STEP_TRANSITION_CONNECTION STEP="S73" TRANSITION="T20" { }
    STEP_TRANSITION_CONNECTION STEP="S73" TRANSITION="T55" { }
    STEP_TRANSITION_CONNECTION STEP="S74" TRANSITION="T99" { }
    STEP_TRANSITION_CONNECTION STEP="S75" TRANSITION="T85" { }
    STEP_TRANSITION_CONNECTION STEP="S75" TRANSITION="T90" { }
    STEP_TRANSITION_CONNECTION STEP="S76" TRANSITION="T101" { }
    STEP_TRANSITION_CONNECTION STEP="S77" TRANSITION="T102" { }
    STEP_TRANSITION_CONNECTION STEP="S77" TRANSITION="T103" { }
    STEP_TRANSITION_CONNECTION STEP="S78" TRANSITION="T86" { }
    STEP_TRANSITION_CONNECTION STEP="S79" TRANSITION="T87" { }
    STEP_TRANSITION_CONNECTION STEP="S8" TRANSITION="T13" { }
    STEP_TRANSITION_CONNECTION STEP="S80" TRANSITION="T88" { }
    STEP_TRANSITION_CONNECTION STEP="S80" TRANSITION="T93" { }
    STEP_TRANSITION_CONNECTION STEP="S81" TRANSITION="T92" { }
    STEP_TRANSITION_CONNECTION STEP="S9" TRANSITION="T43" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="S57" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=1060 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T10" STEP="S8" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T101" STEP="S77" { SEGMENT { INDEX=3 ORIENTATION=HORIZONTAL ORDINATE=240 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T102" STEP="S72" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T103" STEP="S51" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=50 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T11" STEP="S62" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T12" STEP="S6" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T13" STEP="S57" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T14" STEP="S10" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T15" STEP="S11" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T16" STEP="S12" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T17" STEP="S13" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T18" STEP="S22" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T19" STEP="S3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T2" STEP="S51" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T20" STEP="S20" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T21" STEP="S33" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T23" STEP="S24" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T24" STEP="S42" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T25" STEP="S5" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T26" STEP="S18" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T27" STEP="S4" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T28" STEP="S23" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T29" STEP="S48" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T3" STEP="S46" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T30" STEP="S25" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T31" STEP="S58" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T32" STEP="S67" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T33" STEP="S29" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T34" STEP="S26" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T35" STEP="S28" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T36" STEP="S70" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T37" STEP="S30" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T38" STEP="S58" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T39" STEP="S31" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T4" STEP="S40" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T40" STEP="S67" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T41" STEP="S46" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T42" STEP="S39" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T43" STEP="S33" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T44" STEP="S9" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T45" STEP="S69" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T46" STEP="S36" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T47" STEP="S37" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T48" STEP="S46" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T49" STEP="S38" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T5" STEP="S7" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T50" STEP="S33" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T51" STEP="S43" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T52" STEP="S44" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T53" STEP="S19" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T54" STEP="S30" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=1310 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T55" STEP="S21" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T56" STEP="S15" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T57" STEP="S15" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T58" STEP="S35" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T59" STEP="S32" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T6" STEP="S8" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T60" STEP="S48" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T61" STEP="S47" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T61" STEP="S65" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T62" STEP="S50" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T63" STEP="S52" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T64" STEP="S77" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T65" STEP="S45" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T66" STEP="S45" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T67" STEP="S59" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T67" STEP="S63" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T68" STEP="S54" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T69" STEP="S55" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T7" STEP="S2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T70" STEP="S34" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T71" STEP="S56" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T72" STEP="S34" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T73" STEP="S60" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T74" STEP="S17" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T75" STEP="S61" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T76" STEP="S17" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T77" STEP="S43" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T78" STEP="S41" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T79" STEP="S64" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T8" STEP="S14" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T80" STEP="S16" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T81" STEP="S66" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T82" STEP="S73" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T83" STEP="S53" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T83" STEP="S27" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T84" STEP="S78" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T85" STEP="S80" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T86" STEP="S75" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T87" STEP="S48" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T88" STEP="S79" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T89" STEP="S49" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T9" STEP="S25" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=1320 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T90" STEP="S81" { SEGMENT { INDEX=1 ORIENTATION=HORIZONTAL ORDINATE=925 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T91" STEP="S71" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T92" STEP="S78" { SEGMENT { INDEX=1 ORIENTATION=HORIZONTAL ORDINATE=1010 } SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=725 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T93" STEP="S81" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T96" STEP="S68" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T98" STEP="S74" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T99" STEP="S76" { }
  }
  ATTRIBUTE_INSTANCE NAME="AUTO_ADVANCE"
  {
    VALUE { CV=T }
  }
  ATTRIBUTE_INSTANCE NAME="COMMAND"
  {
    VALUE
    {
      SET="$sfc_commands"
      STRING_VALUE="Start Sequence"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="CONFIRM_FAIL"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="ERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="INITIAL_STATE"
  {
    VALUE
    {
      SET="$sfc_initial_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="RERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="STATE"
  {
    VALUE
    {
      SET="$sfc_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="STATUS"
  {
    VALUE
    {
      ENUM_SET="$module_status_opts"
    }
  }
  ATTRIBUTE_INSTANCE NAME="TIME"
  {
    VALUE { CV=0 }
  }
  ATTRIBUTE_INSTANCE NAME="IP_STRING"
  {
    VALUE { CV="-" }
  }
}

/* FUNCTION BLOCK(S) USING:"__50C1D8FC_24FB19D7__"
*/



FUNCTION_BLOCK_DEFINITION NAME="__50C1D8FC_24FB19D7__" CATEGORY=""
 user="ADMINISTRATOR" time=1354881557/* "07-Dec-2012 12:59:17" */
{
  SFC_ALGORITHM
  {
    STEP NAME="AC_S1"
    {
      RECTANGLE= { X=200 Y=1480 H=25 W=100 }
    }
    STEP NAME="AC_S2"
    {
      RECTANGLE= { X=200 Y=1600 H=25 W=100 }
    }
    STEP NAME="AC_S3"
    {
      RECTANGLE= { X=470 Y=1600 H=25 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Message: SFC wiederholen"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch' THEN
'^/REQUEST.CV' := 3401;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := ""Aktionen nicht alle ausgeführt, EMR rufen ! "";
'^/IP_FRAGE_TEXT.CV' := ""Sequenz wiederholen ? "";
'^/IP_FRAGE_JA.CV' := 1;
'^/IP_FRAGE_NEIN.CV' := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Sequenz wiederholen quittiert"";
'^/IP_TR1_T' := ('^/IP_FRAGE_JA.CV' =0);
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV'    := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="AC_S4"
    {
      RECTANGLE= { X=470 Y=1720 H=25 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Reset Request"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' > 0 AND '^/OWNER.CV' != '$phase_owner_id:External' THEN
'^/REQUEST.CV' := 6000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_MELDE_TEXT.CV' := "" "";
'^/IP_FRAGE_TEXT.CV' := "" "";
'^/IP_FRAGE_JA.CV' := 0;
'^/IP_FRAGE_NEIN.CV' := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV'    := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S1"
    {
      DESCRIPTION="Reset 1"
      RECTANGLE= { X=200 Y=40 H=40 W=100 }
      ACTION NAME="TEXT"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_MELDE_TEXT.CV'  := "" "";
'^/IP_FRAGE_TEXT.CV'  :=  "" "";
'^/IP_FRAGE_JA.CV'       := 0;
'^/IP_FRAGE_NEIN.CV'   := 0;
'^/IP_FRAGE_QUITT.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="RESET_IP_AC"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_AC.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S1/TEXT/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S16"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=210 Y=1240 H=20 W=80 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
    }
    STEP NAME="S2"
    {
      DESCRIPTION="SUB GRAFIK ERSTELLEN"
      RECTANGLE= { X=190 Y=200 H=20 W=120 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;
'^/IP_S_T11.CV' := "" "";
'^/IP_TR11_T' := 0;
'^/IP_S_T12.CV'    := "" "";
'^/IP_TR12_T' := 0;
'^/IP_S_T13.CV'    := "" "";
'^/IP_TR13_T' := 0;
'^/IP_S_T14.CV' := "" "";
'^/IP_TR14_T' := 0;
'^/IP_S_T15.CV' := "" "";
'^/IP_TR15_T' := 0;"
      }
    }
    STEP NAME="S3"
    {
      DESCRIPTION="Dummy"
      RECTANGLE= { X=200 Y=990 H=20 W=100 }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
    }
    STEP NAME="S33"
    {
      DESCRIPTION="Transf Ende"
      RECTANGLE= { X=210 Y=740 H=20 W=80 }
      ACTION NAME="A1"
      {
        DESCRIPTION="FC Reset"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AH'         := 999999;
'^/DY_E_FC_AHH'      := 999999;
'//#_HOLD#/FCAHH_AKT.CV'  := 0"
        DELAY_TIME=0
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S33/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S33/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S34"
    {
      DESCRIPTION="Regler+Weg Aus"
      RECTANGLE= { X=200 Y=610 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="PC0020B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#PC0020B#/B/SW_ROUT.CV'       := 0;
'//#PC0020B#/B/A/MODE.TARGET' := ROUT;
'//#PC0020B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        DESCRIPTION="FC1705  ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1705#/B/SW_ROUT.CV'       := 0;
'//#FC1705#/B/A/MODE.TARGET' := ROUT;
'//#FC1705#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A4"
      {
        DESCRIPTION="FC1725 ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#FC1725#/B/SW_ROUT.CV'       := 0;
'//#FC1725#/B/A/MODE.TARGET' := ROUT;
'//#FC1725#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A5"
      {
        DESCRIPTION="TC0030B ROUT"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#TC0030B#/B/SW_ROUT.CV'       := 0;
'//#TC0030B#/B/A/MODE.TARGET' := ROUT;
'//#TC0030B#/B/MODE_FREI.CV'   := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A6"
      {
        DESCRIPTION="Empfang Weg V1"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V1_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V1_MODE_F'     := CAS;
'^/DY_E_V1_MODE_T'     := CAS;
'^/DY_E_V1_CAS2_FRE'  := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A7"
      {
        DESCRIPTION="Empfang Weg V2"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V2_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V2_MODE_F'     := CAS;
'^/DY_E_V2_MODE_T'     := CAS;
'^/DY_E_V2_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A8"
      {
        DESCRIPTION="Empfang Weg V3"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_V3_SW_CAS2' := 'vlvnc-sp:CLOSE';
'^/DY_E_V3_MODE_F'     := CAS; 
'^/DY_E_V3_MODE_T'     := CAS;
'^/DY_E_V3_CAS2_FRE'  := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A9"
      {
        DESCRIPTION="Empfang V_FQ"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_VF_SW_CAS2' := 0;
'^/DY_E_VF_MODE_F'     := CAS;
'^/DY_E_VF_MODE_T'     := CAS;
'^/DY_E_VF_CAS2_FRE' := 1;"
        DELAY_TIME=0
      }
      ACTION NAME="A11"
      {
        DESCRIPTION="Reaktionszeit Stop"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/REAKTIONSZEIT/IN_D.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    :=   ""Ventil"" + '/+/ST_E_V1' + "" geschlossen"";
'^/IP_TR1_T' := ('^/DY_E_V1_GESCHL' = 1  OR '^/DY_E_V1.IGN' = 1);

'^/IP_S_T2.CV'    :=  ""Ventil"" + '/+/ST_E_V2'  + "" geschlossen"";
'^/IP_TR2_T' := ('^/DY_E_V2_GESCHL' = 1  OR '^/DY_E_V2.IGN' = 1 );

'^/IP_S_T3.CV'    :=  ""Ventil"" + '/+/ST_E_V3'  + "" geschlossen"";
'^/IP_TR3_T' := ('^/DY_E_V3_GESCHL' = 1  OR '^/DY_E_V3.IGN' = 1);

'^/IP_S_T4.CV'    :=  ""Ventil"" + '/+/ST_E_VF'  + "" geschlossen"";
'^/IP_TR4_T' := ('^/DY_E_VF_GESCHL' = 1  OR '^/DY_E_VF.IGN' = 1 );

'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S34/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A3/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A4/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A5/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A6/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A7/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A8/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A9/STATE.CV' <> '$sfc_action_states:Complete' OR
'S34/A11/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S34/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S4"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=200 Y=1120 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Upload Report Values"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
      '^/REQUEST.CV' := 2000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/DY_E_FQ.IGN' = 0 THEN
  '//#UM#/GAS_FQ.CV' := '^/DY_E_FQ_X';
  '^/RP_FQ.CV' := '^/DY_E_FQ_X';
ELSE
  '//#UM#/GAS_FQ.CV' := 0;
  '^/RP_FQ.CV' := 0;
END_IF"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S4/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S4/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S4/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S5"
    {
      DESCRIPTION="REPORT"
      RECTANGLE= { X=360 Y=1120 H=20 W=100 }
      ACTION NAME="A1"
      {
        DESCRIPTION="Upload Report Values"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="IF '^/REQUEST.CV' = 0 AND '^/OWNER.CV' = '$phase_owner_id:DeltaV Batch'  THEN 
      '^/REQUEST.CV' := 2000;
END_IF;"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'//#UM#/GAS_FQ.CV' := 0;
  '^/RP_FQ.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S5/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S5/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S5/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S53"
    {
      DESCRIPTION="Meldung 5"
      RECTANGLE= { X=210 Y=310 H=20 W=80 }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_E_FC_AL'                               := -999999;"
        DELAY_TIME=0
      }
      ACTION NAME="A10"
      {
        DESCRIPTION="Unterbr deakt"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/FAIL_MONITOR/UNTERBR_AKT.CV' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="A13"
      {
        DESCRIPTION="Unterbruch Taste scharf"
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/TASTE_1.CV'             := 0;
'^/TASTE_1_AKTIV.CV' := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S53/A2/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A10/STATE.CV' <> '$sfc_action_states:Complete' OR
'S53/A13/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S54"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=220 Y=410 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S54/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S54/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S55"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=410 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/IP_FC_SCHL_RAMPE.CV' :=  ( 100  * '^/IP_ZYKLUS_ZEIT.CV' )  / '^/FP_FC_SCHLIESS_Z.CV'"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := '^/DY_E_FC_BKCAL_IN';
'/+/DY_E_FC_MODE.TARGET'         := ROUT;
'/+/DY_E_FC_MODE_F.CV'           := ROUT;"
        DELAY_TIME=0
      }
      ACTION NAME="A3"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       :=  '/+/DY_E_FC_SW_ROUT.CV'    - '^/IP_FC_SCHL_RAMPE.CV';"
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := ""Ausgang Regler "" + '^/ST_E_FC.CV' + "" <= 0 : "" + '^/DY_E_FC_SW_ROUT' + "" <= 0"" ;
'^/IP_TR1_T.CV' :=  ( '^/DY_E_FC_SW_ROUT' <= 0 ) ;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S55/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S55/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S55/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S56"
    {
      DESCRIPTION="-"
      RECTANGLE= { X=340 Y=500 H=20 W=60 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'/+/DY_E_FC_SW_ROUT.CV'       := 0;"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T.CV' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T.CV' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T.CV' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T.CV' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T.CV' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T.CV' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T.CV' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T.CV' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T.CV' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T.CV' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S56/A1/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S56/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    STEP NAME="S69"
    {
      DESCRIPTION="Sub Grafik löschen"
      RECTANGLE= { X=200 Y=870 H=20 W=100 }
      ACTION NAME="A1"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_GASST'  := """";"
        DELAY_TIME=0
      }
      ACTION NAME="A2"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=P
        EXPRESSION="'^/DY_GR_G_W_STATUS' := 0"
        DELAY_TIME=0
      }
      ACTION NAME="TR_TEXT"
      {
        DESCRIPTION="Transient Text"
        ACTION_TYPE=ASSIGN
        QUALIFIER=N
        EXPRESSION="'^/IP_S_T1.CV'    := "" "";
'^/IP_TR1_T' := 0;
'^/IP_S_T2.CV'    := "" "";
'^/IP_TR2_T' := 0;
'^/IP_S_T3.CV'    := "" "";
'^/IP_TR3_T' := 0;
'^/IP_S_T4.CV'    := "" "";
'^/IP_TR4_T' := 0;
'^/IP_S_T5.CV'    := "" "";
'^/IP_TR5_T' := 0;
'^/IP_S_T6.CV'    := "" "";
'^/IP_TR6_T' := 0;
'^/IP_S_T7.CV'    := "" "";
'^/IP_TR7_T' := 0;
'^/IP_S_T8.CV'    := "" "";
'^/IP_TR8_T' := 0;
'^/IP_S_T9.CV'    := "" "";
'^/IP_TR9_T' := 0;
'^/IP_S_T10.CV' := "" "";
'^/IP_TR10_T' := 0;"
      }
      ACTION NAME="ACTION_COMPL"
      {
        ACTION_TYPE=ASSIGN
        QUALIFIER=D
        EXPRESSION="IF 'S69/A1/STATE.CV' <> '$sfc_action_states:Complete' OR
'S69/A2/STATE.CV' <> '$sfc_action_states:Complete' THEN
'^/IP_AC.CV' := 1;
ENDIF;"
        DELAY_EXPRESSION="'S69/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_STEP.CV'"
      }
    }
    INITIAL_STEP="S1"
    TRANSITION NAME="AC_T1"
    {
      POSITION= { X=240 Y=1540 }
      TERMINATION=F
      EXPRESSION="'^/IP_AC.CV' = 0"
    }
    TRANSITION NAME="AC_T2"
    {
      POSITION= { X=510 Y=1540 }
      TERMINATION=F
      EXPRESSION="'^/IP_AC.CV' = 1"
    }
    TRANSITION NAME="AC_T3"
    {
      DESCRIPTION="Ende"
      POSITION= { X=240 Y=1780 }
      TERMINATION=T
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="AC_T4"
    {
      POSITION= { X=510 Y=1660 }
      TERMINATION=F
      EXPRESSION="'^/IP_FRAGE_JA.CV' = 0"
    }
    TRANSITION NAME="AC_T5"
    {
      POSITION= { X=510 Y=1780 }
      TERMINATION=F
      EXPRESSION="'^/REQUEST.CV' = 0 OR
'^/OWNER.CV' = '$phase_owner_id:External'"
    }
    TRANSITION NAME="T1"
    {
      POSITION= { X=240 Y=140 }
      TERMINATION=F
      EXPRESSION="('^/FLAG_DYN_REF_OK.CV' = 1)
AND
(('S1/TEXT/STATE.CV' = '$sfc_action_states:Complete') OR 'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T2"
    {
      POSITION= { X=620 Y=140 }
      TERMINATION=F
      EXPRESSION="(('S1/TEXT/STATE.CV' = '$sfc_action_states:Complete') OR 'S1/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T22"
    {
      DESCRIPTION="Ende"
      POSITION= { X=240 Y=1300 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T3"
    {
      POSITION= { X=240 Y=250 }
      TERMINATION=F
      EXPRESSION="'^/IP_FP_OK.CV' = 1"
    }
    TRANSITION NAME="T4"
    {
      POSITION= { X=550 Y=260 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T42"
    {
      DESCRIPTION="Weg OK"
      POSITION= { X=240 Y=670 }
      TERMINATION=F
      EXPRESSION="(('^/DY_E_V1_GESCHL' = 1 OR '^/DY_E_V1.IGN' = 1) AND 
('^/DY_E_V2_GESCHL' = 1 OR '^/DY_E_V2.IGN' = 1) AND  
('^/DY_E_V3_GESCHL' = 1 OR '^/DY_E_V3.IGN' = 1) AND 
('^/DY_E_VF_GESCHL' = 1 OR '^/DY_E_VF.IGN' = 1))
AND
(('S34/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A3/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A4/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A5/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A6/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A7/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A8/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A9/STATE.CV' = '$sfc_action_states:Complete' AND
'S34/A11/STATE.CV' = '$sfc_action_states:Complete') OR 'S34/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T45"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=790 }
      TERMINATION=F
      EXPRESSION="(('S33/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S33/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T5"
    {
      POSITION= { X=240 Y=1060 }
      TERMINATION=F
      EXPRESSION="'^/FLAG_FQ_RESET.CV' = 1"
    }
    TRANSITION NAME="T6"
    {
      DESCRIPTION="OK"
      POSITION= { X=400 Y=1070 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T68"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=240 Y=370 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' = 0)
AND
(('S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete') OR 'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T69"
    {
      DESCRIPTION="Meldung Quittiert YES"
      POSITION= { X=360 Y=370 }
      TERMINATION=F
      EXPRESSION="('^/FP_FC_SCHLIESS_Z.CV' > 0)
AND
(('S53/A2/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A10/STATE.CV' = '$sfc_action_states:Complete' AND
'S53/A13/STATE.CV' = '$sfc_action_states:Complete') OR 'S53/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T7"
    {
      POSITION= { X=240 Y=1160 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0
OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
(('S4/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S4/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S4/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T70"
    {
      POSITION= { X=240 Y=460 }
      TERMINATION=F
      EXPRESSION="(('S54/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S54/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T71"
    {
      POSITION= { X=360 Y=460 }
      TERMINATION=F
      EXPRESSION="('^/DY_E_FC_SW_ROUT' <= 0)
AND
(('S55/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S55/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S55/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T72"
    {
      POSITION= { X=360 Y=540 }
      TERMINATION=F
      EXPRESSION="(('S56/A1/STATE.CV' = '$sfc_action_states:Complete') OR 'S56/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T8"
    {
      POSITION= { X=400 Y=1160 }
      TERMINATION=F
      EXPRESSION="(( '^/REQUEST.CV' = 0
OR 
'^/OWNER.CV' = '$phase_owner_id:External' ))
AND
(('S5/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S5/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S5/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    TRANSITION NAME="T91"
    {
      DESCRIPTION="OK"
      POSITION= { X=240 Y=930 }
      TERMINATION=F
      EXPRESSION="(('S69/A1/STATE.CV' = '$sfc_action_states:Complete' AND
'S69/A2/STATE.CV' = '$sfc_action_states:Complete') OR 'S69/TIME.CV' > '^/FAIL_MONITOR/IP_AC_DELAY_TR.CV')"
    }
    STEP_TRANSITION_CONNECTION STEP="AC_S1" TRANSITION="AC_T1" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S1" TRANSITION="AC_T2" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S2" TRANSITION="AC_T3" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S3" TRANSITION="AC_T4" { }
    STEP_TRANSITION_CONNECTION STEP="AC_S4" TRANSITION="AC_T5" { }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T1" { }
    STEP_TRANSITION_CONNECTION STEP="S1" TRANSITION="T2" { }
    STEP_TRANSITION_CONNECTION STEP="S16" TRANSITION="T22" { }
    STEP_TRANSITION_CONNECTION STEP="S2" TRANSITION="T3" { }
    STEP_TRANSITION_CONNECTION STEP="S2" TRANSITION="T4" { }
    STEP_TRANSITION_CONNECTION STEP="S3" TRANSITION="T5" { }
    STEP_TRANSITION_CONNECTION STEP="S3" TRANSITION="T6" { }
    STEP_TRANSITION_CONNECTION STEP="S33" TRANSITION="T45" { }
    STEP_TRANSITION_CONNECTION STEP="S34" TRANSITION="T42" { }
    STEP_TRANSITION_CONNECTION STEP="S4" TRANSITION="T7" { }
    STEP_TRANSITION_CONNECTION STEP="S5" TRANSITION="T8" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T69" { }
    STEP_TRANSITION_CONNECTION STEP="S53" TRANSITION="T68" { }
    STEP_TRANSITION_CONNECTION STEP="S54" TRANSITION="T70" { }
    STEP_TRANSITION_CONNECTION STEP="S55" TRANSITION="T71" { }
    STEP_TRANSITION_CONNECTION STEP="S56" TRANSITION="T72" { }
    STEP_TRANSITION_CONNECTION STEP="S69" TRANSITION="T91" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T1" STEP="AC_S2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T2" STEP="AC_S3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T4" STEP="AC_S4" { }
    TRANSITION_STEP_CONNECTION TRANSITION="AC_T5" STEP="S1" { SEGMENT { INDEX=2 ORIENTATION=VERTICAL ORDINATE=100 } }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="S2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T2" STEP="S69" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T22" STEP="AC_S1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T3" STEP="S53" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T4" STEP="S33" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T42" STEP="S33" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T45" STEP="S69" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T5" STEP="S4" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T6" STEP="S5" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T68" STEP="S54" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T69" STEP="S55" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T7" STEP="S16" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T70" STEP="S34" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T71" STEP="S56" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T72" STEP="S34" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T8" STEP="S16" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T91" STEP="S3" { }
  }
  ATTRIBUTE_INSTANCE NAME="AUTO_ADVANCE"
  {
    VALUE { CV=T }
  }
  ATTRIBUTE_INSTANCE NAME="COMMAND"
  {
    VALUE
    {
      SET="$sfc_commands"
      STRING_VALUE="Start Sequence"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="CONFIRM_FAIL"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="ERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="INITIAL_STATE"
  {
    VALUE
    {
      SET="$sfc_initial_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="RERROR"
  {
    VALUE { CV=F }
  }
  ATTRIBUTE_INSTANCE NAME="STATE"
  {
    VALUE
    {
      SET="$sfc_states"
      STRING_VALUE="Sequence Active"
      CHANGEABLE=F
    }
  }
  ATTRIBUTE_INSTANCE NAME="STATUS"
  {
    VALUE
    {
      ENUM_SET="$module_status_opts"
    }
  }
  ATTRIBUTE_INSTANCE NAME="TIME"
  {
    VALUE { CV=0 }
  }
}
BATCH_EQUIPMENT_PHASE_CLASS NAME="GAS" CATEGORY="Library/Phase Classes/Behaelter"
 user="ADMINISTRATOR" time=1525171949/* "01-May-2018 12:52:29" */
{
  DESCRIPTION="Feststoff"
  PARTNERS=0
  BATCH_PHASE_DEFINITION
  {
    BATCH_MESSAGE NAME="Meldung GF Dosieren Gas"
    {
      ID=1
    }
    BATCH_PHASE_PARAMETER NAME="FP_UNTERBR_TSL" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=1
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_UNTERBR_TSH" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=2
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_UNTERBR_PSH" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=4
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_UNTERBR_PSL" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=5
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FAHH_GAS" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=6
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_MANSTART" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=7
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_MANENDE" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=8
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FQ_SH_GAS" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=9
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_OPT_PC" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=10
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_OPT_FC_GAS" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=11
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_OPT_FC_ABL" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=12
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_OPT_TC" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=13
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_PC_W" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=14
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FC_W_GAS" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=15
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FC_W_ABL" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=16
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_TC_W" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=17
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FSB_OPTION" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=18
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FSB_PSH" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=19
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FSB_FQ_GAS" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=20
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FSB_FSL_GAS" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=21
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_MANABBR" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=22
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_WEG" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=23
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FAL_GAS" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=24
      GROUP="Tuning"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FSB_ZEIT" TYPE=BATCH_PARAMETER_INTEGER DIRECTION=INPUT
    {
      ID=25
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FAH_GAS" TYPE=BATCH_PARAMETER_REAL DIRECTION=INPUT
    {
      ID=26
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_GASST" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=27
      GROUP="Operating"
    }
    BATCH_PHASE_PARAMETER NAME="FP_FC_SCHLIESS_Z" TYPE=BATCH_PARAMETER_INTEGER DIRECTION=INPUT
    {
      ID=3
    }
    BATCH_PHASE_PARAMETER NAME="FP_MANUNTERBR" TYPE=ENUMERATION_VALUE DIRECTION=INPUT
    {
      ID=28
    }
    BATCH_PHASE_PARAMETER NAME="FP_BESCHREI_TEXT" TYPE=UNICODE_STRING DIRECTION=INPUT
    {
      ID=29
    }
    BATCH_PHASE_PARAMETER NAME="RP_FQ" TYPE=BATCH_REPORT_REAL DIRECTION=OUTPUT
    {
      ID=1
    }
    BATCH_PHASE_PARAMETER NAME="RP_FSB_OK_ZEIT" TYPE=UNICODE_STRING DIRECTION=OUTPUT
    {
      ID=2
    }
    BATCH_PHASE_PARAMETER NAME="RP_YS_AUF_ZEIT" TYPE=UNICODE_STRING DIRECTION=OUTPUT
    {
      ID=3
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_TSL"
    {
      VALUE { DESCRIPTION="" HIGH=500 LOW=-100 SCALABLE=F CV=-100 UNITS="°C" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_TSH"
    {
      VALUE { DESCRIPTION="" HIGH=500 LOW=-100 SCALABLE=F CV=500 UNITS="°C" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_PSH"
    {
      VALUE { DESCRIPTION="" HIGH=20000 LOW=-1000 SCALABLE=F CV=20000 UNITS="mbar" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_PSL"
    {
      VALUE { DESCRIPTION="" HIGH=20000 LOW=-1000 SCALABLE=F CV=-1000 UNITS="mbar" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FAHH_GAS"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=100000 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANSTART"
    {
      VALUE
      {
        SET="LGF_GAS_MANSTART"
        STRING_VALUE="JA"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANENDE"
    {
      VALUE
      {
        SET="L_JA_NEIN"
        STRING_VALUE="JA"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FQ_SH_GAS"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=0 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_PC"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_FC_GAS"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_FC_ABL"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_TC"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_PC_W"
    {
      VALUE { DESCRIPTION="" HIGH=20000 LOW=-1000 SCALABLE=F CV=0 UNITS="mbar" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FC_W_GAS"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=0 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FC_W_ABL"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=0 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_TC_W"
    {
      VALUE { DESCRIPTION="" HIGH=500 LOW=-100 SCALABLE=F CV=0 UNITS="°C" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_OPTION"
    {
      VALUE
      {
        SET="LGF_GAS_OPT"
        STRING_VALUE="ZEIT - Reaktionszeit"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_PSH"
    {
      VALUE { DESCRIPTION="" HIGH=20000 LOW=-1000 SCALABLE=F CV=20000 UNITS="mbar" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_FQ_GAS"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=0 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_FSL_GAS"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=0 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANABBR"
    {
      VALUE
      {
        SET="L_JA_NEIN"
        STRING_VALUE="NEIN"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_WEG"
    {
      VALUE
      {
        SET="LGF_WEG"
        STRING_VALUE="W1"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FAL_GAS"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=0 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_ZEIT"
    {
      VALUE { DESCRIPTION="" HIGH=1000000 LOW=0 SCALABLE=F CV=0 UNITS="sec" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FAH_GAS"
    {
      VALUE { DESCRIPTION="" HIGH=100000 LOW=0 SCALABLE=F CV=100000 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="FP_GASST"
    {
      VALUE
      {
        SET="LP_GASSTATION"
        STRING_VALUE="keine"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FC_SCHLIESS_Z"
    {
      VALUE { DESCRIPTION="" HIGH=1000 LOW=0 SCALABLE=F CV=0 UNITS="sec" }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANUNTERBR"
    {
      VALUE
      {
        SET="L_JA_NEIN"
        STRING_VALUE="JA"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="RP_FQ"
    {
      VALUE { DESCRIPTION="" CV=0 UNITS="            " }
    }
    ATTRIBUTE_INSTANCE NAME="RP_FSB_OK_ZEIT"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="RP_YS_AUF_ZEIT"
    {
      VALUE { CV="" }
    }
  }
  PHASE_CLASS_ALGORITHM NAME="DEFAULT"
  {
    PHASE_ALGORITHM
    {
    }
    FUNCTION_BLOCK NAME="RUN_LOGIC" DEFINITION="__50EA9146_C93165D6__"
    {
      DESCRIPTION="Running logic"
      ID=4173134
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      ALGORITHM_GENERATED=T
    }
    FUNCTION_BLOCK NAME="ABORT_LOGIC" DEFINITION="__50D06392_5DC877E5__"
    {
      DESCRIPTION="Aborting logic"
      ID=4173151
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      ALGORITHM_GENERATED=T
    }
    FUNCTION_BLOCK NAME="HOLD_LOGIC" DEFINITION="__50C1DA15_24FF64E8__"
    {
      DESCRIPTION="Holding logic"
      ID=4173167
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      ALGORITHM_GENERATED=T
    }
    FUNCTION_BLOCK NAME="RESTART_LOGIC" DEFINITION="LC_GF_RESTART_LO"
    {
      DESCRIPTION="Restarting logic"
      ID=4173168
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      ALGORITHM_GENERATED=T
    }
    FUNCTION_BLOCK NAME="STOP_LOGIC" DEFINITION="__50C1D8FC_24FB19D7__"
    {
      DESCRIPTION="Stopping logic"
      ID=4173185
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      ALGORITHM_GENERATED=T
    }
    FUNCTION_BLOCK NAME="FAIL_MONITOR" DEFINITION="__592D411E_D935159F__"
    {
      DESCRIPTION="Failure monitor"
      ID=4173186
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      ALGORITHM_GENERATED=T
    }
    ATTRIBUTE NAME="FP_UNTERBR_TSL" TYPE=FLOAT
    {
      INDEX=1
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_UNTERBR_TSH" TYPE=FLOAT
    {
      INDEX=2
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_UNTERBR_PSH" TYPE=FLOAT
    {
      INDEX=4
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_UNTERBR_PSL" TYPE=FLOAT
    {
      INDEX=5
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FAHH_GAS" TYPE=FLOAT
    {
      INDEX=6
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_MANSTART" TYPE=ENUMERATION_VALUE
    {
      INDEX=7
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_MANENDE" TYPE=ENUMERATION_VALUE
    {
      INDEX=8
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FQ_SH_GAS" TYPE=FLOAT
    {
      INDEX=9
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_OPT_PC" TYPE=ENUMERATION_VALUE
    {
      INDEX=10
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_OPT_FC_GAS" TYPE=ENUMERATION_VALUE
    {
      INDEX=11
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_OPT_FC_ABL" TYPE=ENUMERATION_VALUE
    {
      INDEX=12
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_OPT_TC" TYPE=ENUMERATION_VALUE
    {
      INDEX=13
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_PC_W" TYPE=FLOAT
    {
      INDEX=14
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FC_W_GAS" TYPE=FLOAT
    {
      INDEX=15
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FC_W_ABL" TYPE=FLOAT
    {
      INDEX=16
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_TC_W" TYPE=FLOAT
    {
      INDEX=17
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FSB_OPTION" TYPE=ENUMERATION_VALUE
    {
      INDEX=18
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FSB_PSH" TYPE=FLOAT
    {
      INDEX=19
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FSB_FQ_GAS" TYPE=FLOAT
    {
      INDEX=20
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FSB_FSL_GAS" TYPE=FLOAT
    {
      INDEX=21
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_MANABBR" TYPE=ENUMERATION_VALUE
    {
      INDEX=22
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_WEG" TYPE=ENUMERATION_VALUE
    {
      INDEX=23
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FAL_GAS" TYPE=FLOAT
    {
      INDEX=24
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Tuning"
    }
    ATTRIBUTE NAME="FP_FSB_ZEIT" TYPE=INT32
    {
      INDEX=25
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FAH_GAS" TYPE=FLOAT
    {
      INDEX=26
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_GASST" TYPE=ENUMERATION_VALUE
    {
      INDEX=27
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
      GROUP="Operating"
    }
    ATTRIBUTE NAME="FP_FC_SCHLIESS_Z" TYPE=INT32
    {
      INDEX=3
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
    }
    ATTRIBUTE NAME="FP_MANUNTERBR" TYPE=ENUMERATION_VALUE
    {
      INDEX=28
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
    }
    ATTRIBUTE NAME="FP_BESCHREI_TEXT" TYPE=UNICODE_STRING
    {
      INDEX=29
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
    }
    ATTRIBUTE NAME="RP_FQ" TYPE=FLOAT
    {
      INDEX=1
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
    }
    ATTRIBUTE NAME="RP_FSB_OK_ZEIT" TYPE=UNICODE_STRING
    {
      INDEX=2
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
    }
    ATTRIBUTE NAME="RP_YS_AUF_ZEIT" TYPE=UNICODE_STRING
    {
      INDEX=3
      EDITABLE=F
      RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
    }
    ATTRIBUTE NAME="IP_FRAGE_TEXT" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_PC_SL" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Operating"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_PC_SH" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Operating"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TC_SL" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Operating"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TC_SH" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Operating"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="TASTE_1" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Operating"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_LOG_STATUS" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T1" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T2" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T3" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T4" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T5" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T6" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T7" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T8" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T9" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T10" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="VERSION" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR1_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR2_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR3_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR4_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR5_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR6_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR7_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR8_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR9_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR10_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_FRAGE_JA" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_FRAGE_NEIN" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_FRAGE_QUITT" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_MELDE_TEXT" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="FLAG_FQ_RESET" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="FLAG_ZEITRST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V1" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V2" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V3" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_VF" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_E_V1" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_E_V2" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_E_V3" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_E_VF" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_E_FQ" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_E_FC" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V1_SW_CAS2" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V2_SW_CAS2" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V3_SW_CAS2" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_VF_SW_CAS2" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_SW_CAS2" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_SW_CAS2" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V1_CAS2_FRE" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V2_CAS2_FRE" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V3_CAS2_FRE" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_VF_CAS2_FRE" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_CAS2_FRE" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_CAS2_FRE" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V1_MODE_T" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V2_MODE_T" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V3_MODE_T" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_VF_MODE_T" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_MODE_T" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V1_MODE_F" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V2_MODE_F" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V3_MODE_F" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_VF_MODE_F" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_MODE_F" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_MODE_F" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V1_OFFEN" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V2_OFFEN" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V3_OFFEN" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_VF_OFFEN" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V1_GESCHL" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V2_GESCHL" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_V3_GESCHL" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_VF_GESCHL" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_RESET" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_EIN" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_VORABSCH" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FQ_X" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_SW_ROUT" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_HSC" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_LSC" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_AL" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_AH" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_YSH" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_X" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_AHH" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_GASST_OK" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_GASST" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_EINGABE" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_EINGABE_FLAG" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="TASTE_1_BEZ" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_AHH_ACT" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="TASTE_2" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="TASTE_2_BEZ" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="TASTE_1_AKTIV" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="FLAG_DYN_REF_BER" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_E_V_1_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_E_V_2_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_E_V_3_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_E_V_FQ_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_E_FQ_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_E_FC_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_GASST_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="FLAG_DYN_REF_OK" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_GR_G_W_STATUS" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_GR_G_GASST" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="ST_GAS_WEG" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_DY_E_CST" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_ZYKLUS_ZEIT" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_FC_SCHL_RAMPE" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_BKCAL_IN" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_BESCHREI_TEXT" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_PC_HYS" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TC_HYS" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_FP_OK" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T11" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T12" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T13" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T14" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_S_T15" TYPE=UNICODE_STRING
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR11_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR12_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR13_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR14_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_TR15_T" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="FLAG_YS_AUF_ZEIT" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="FLAG_FSB_OK_ZEIT" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_AC" TYPE=BOOLEAN
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="DY_E_FC_MODE" TYPE=DYNAMIC_REFERENCE
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      GROUP="Tuning"
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE NAME="IP_FSB_FQ_GAS" TYPE=FLOAT
    {
      RECTANGLE= { X=-100 Y=-100 H=20 W=70 }
      CATEGORY { CATEGORY=COMMON }
    }
    ATTRIBUTE_INSTANCE NAME="AUTO_RESTART"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="BATCH_ID"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="BCOMMAND"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="BSTATUS"
    {
      VALUE
      {
        SET="$phase_state"
        STRING_VALUE="Idle"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="CLASS"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="COMMANDMASK"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="DOWNLOAD_REQ"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="FAIL_INDEX"
    {
      VALUE
      {
        SET="phase_failures"
        STRING_VALUE="OK"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="OWNER"
    {
      VALUE
      {
        SET="$phase_owner_id"
        STRING_VALUE="DeltaV Batch"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="PAUSE_REQ"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="PAUSED"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="PHASE"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="PHASE_ACT"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="PHASE_CURRENT"
    {
      VALUE { CV=T }
    }
    ATTRIBUTE_INSTANCE NAME="PHASE_ENABLE"
    {
      VALUE { CV=T }
    }
    ATTRIBUTE_INSTANCE NAME="PROMPT_BOOL"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="PROMPT_FLOAT"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="PROMPT_INT"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="PROMPT_STRING"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="REQDATA1"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="REQDATA2"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="REQDATA3"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="REQDATA4"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="REQDATA5"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="REQUEST"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="RESTART_TYPE"
    {
      VALUE
      {
        SET="$phase_restart_types"
        STRING_VALUE="Continue"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="SINGLE_STEP"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="SIZE"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="STATE_TIME"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="STATUS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="STEP_INDEX"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="SWITCHED_OVER"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="TIME"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="TOO_LONG_TIME"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="UNIT"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="WATCHDOG"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="WDOG_STATE"
    {
      VALUE
      {
        SET="$phase_wdog_states"
        STRING_VALUE="OK"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="WDOG_TIME"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="XCOMMAND"
    {
      VALUE
      {
        SET="$phase_command"
        STRING_VALUE="Reset"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_TSL"
    {
      VALUE { CV=-100 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_TSH"
    {
      VALUE { CV=500 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_PSH"
    {
      VALUE { CV=20000 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_UNTERBR_PSL"
    {
      VALUE { CV=-1000 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FAHH_GAS"
    {
      VALUE { CV=100000 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANSTART"
    {
      VALUE
      {
        SET="LGF_GAS_MANSTART"
        STRING_VALUE="JA"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANENDE"
    {
      VALUE
      {
        SET="L_JA_NEIN"
        STRING_VALUE="JA"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FQ_SH_GAS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_PC"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_FC_GAS"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_FC_ABL"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_OPT_TC"
    {
      VALUE
      {
        SET="L_EIN_AUS"
        STRING_VALUE="AUS"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_PC_W"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FC_W_GAS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FC_W_ABL"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_TC_W"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_OPTION"
    {
      VALUE
      {
        SET="LGF_GAS_OPT"
        STRING_VALUE="ZEIT - Reaktionszeit"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_PSH"
    {
      VALUE { CV=20000 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_FQ_GAS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_FSL_GAS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANABBR"
    {
      VALUE
      {
        SET="L_JA_NEIN"
        STRING_VALUE="NEIN"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_WEG"
    {
      VALUE
      {
        SET="LGF_WEG"
        STRING_VALUE="W1"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FAL_GAS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FSB_ZEIT"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FAH_GAS"
    {
      VALUE { CV=100000 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_GASST"
    {
      VALUE
      {
        SET="LP_GASSTATION"
        STRING_VALUE="keine"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_FC_SCHLIESS_Z"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="FP_MANUNTERBR"
    {
      VALUE
      {
        SET="L_JA_NEIN"
        STRING_VALUE="JA"
        CHANGEABLE=F
      }
    }
    ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="RP_FQ"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="RP_FSB_OK_ZEIT"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="RP_YS_AUF_ZEIT"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_FRAGE_TEXT"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_PC_SL"
    {
      VALUE { CV=100 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_PC_SH"
    {
      VALUE { CV=150 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TC_SL"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TC_SH"
    {
      VALUE { CV=100 }
    }
    ATTRIBUTE_INSTANCE NAME="TASTE_1"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_LOG_STATUS"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T1"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T2"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T3"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T4"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T5"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T6"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T7"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T8"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T9"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T10"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="VERSION"
    {
      VALUE { CV="DV_1" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR1_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR2_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR3_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR4_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR5_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR6_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR7_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR8_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR9_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR10_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_FRAGE_JA"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_FRAGE_NEIN"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_FRAGE_QUITT"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_MELDE_TEXT"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="FLAG_FQ_RESET"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="FLAG_ZEITRST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="ST_E_V1"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="ST_E_V2"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="ST_E_V3"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="ST_E_VF"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="ST_E_FQ"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="ST_E_FC"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="ST_GASST"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_EINGABE"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_EINGABE_FLAG"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="TASTE_1_BEZ"
    {
      VALUE { CV="UNTBR" }
    }
    ATTRIBUTE_INSTANCE NAME="TASTE_2"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="TASTE_2_BEZ"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="TASTE_1_AKTIV"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="FLAG_DYN_REF_BER"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_E_V_1_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_E_V_2_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_E_V_3_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_E_V_FQ_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_E_FQ_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_E_FC_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_GASST_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="FLAG_DYN_REF_OK"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="ST_GAS_WEG"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_DY_E_CST"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_ZYKLUS_ZEIT"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_FC_SCHL_RAMPE"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_BESCHREI_TEXT"
    {
      VALUE { CV="" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_PC_HYS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TC_HYS"
    {
      VALUE { CV=0 }
    }
    ATTRIBUTE_INSTANCE NAME="IP_FP_OK"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T11"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T12"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T13"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T14"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_S_T15"
    {
      VALUE { CV="-" }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR11_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR12_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR13_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR14_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_TR15_T"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="FLAG_YS_AUF_ZEIT"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="FLAG_FSB_OK_ZEIT"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_AC"
    {
      VALUE { CV=F }
    }
    ATTRIBUTE_INSTANCE NAME="IP_FSB_FQ_GAS"
    {
      VALUE { CV=0 }
    }
  }
}`