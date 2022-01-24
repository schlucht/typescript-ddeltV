
export default `
/* Version: 10.3.1.3657.xr */
/* "05-Aug-2020 09:21:32" */

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
BATCH_RECIPE NAME="RP_REIN_IODOS-Q2800-P105_WA" TYPE=PROCEDURE CATEGORY="Recipes/Procedures/REIN_IODOS-3"
 user="FLAMBRIGGE" time=1596611912/* "05-Aug-2020 09:18:32" */
{
  USE_EQUIPMENT_TRAINS=F
  AUTHOR="LSCHMID1"
  ABSTRACT=""
  BATCH_UNITS=""
  BATCH_LENGTH=""
  DEFAULT_BATCH_SIZE=100
  MINIMUM_BATCH_SIZE=1
  MAXIMUM_BATCH_SIZE=100
  PRODUCT_CODE=""
  PRODUCT_NAME=""
  RECIPE_APPROVAL_INFO=""
  VERSION="1"
  FORMULA_PARAMETER NAME="FP_ANZAHL_DEST" TYPE=BATCH_PARAMETER_INTEGER
  {
    CONNECTION=INPUT
    RECTANGLE= { X=-50 Y=-50 H=1 W=1 }
  }
  ATTRIBUTE_INSTANCE NAME="FP_ANZAHL_DEST"
  {
    VALUE { DESCRIPTION="" HIGH=255 LOW=0 SCALABLE=F CV=3 UNITS="            " }
  }
  PFC_ALGORITHM
  {
    GRAPHICS ALGORITHM=PFC
    {
      TEXT_GRAPHIC
      {
        NAME="{714D9FFE-64CD-4984-8B4D-8D78B1A55003}"
        ORIGIN= { X=271 Y=434 }
        END= { X=356 Y=448 }
        TEXT="Destillieren P5500"
      }
      TEXT_GRAPHIC
      {
        NAME="{DBD8CF42-F6C3-4502-BC53-70EFD994B149}"
        ORIGIN= { X=267 Y=528 }
        END= { X=346 Y=542 }
        TEXT="Destillieren P123"
      }
      TEXT_GRAPHIC
      {
        NAME="{0A961D84-4254-43BF-B65E-3765614D963F}"
        ORIGIN= { X=272 Y=238 }
        END= { X=367 Y=252 }
        TEXT="Wasser Xylolleitung"
      }
      TEXT_GRAPHIC
      {
        NAME="{7D752DFB-1F97-41D8-A930-D751E89AA83B}"
        ORIGIN= { X=560 Y=220 }
        END= { X=634 Y=234 }
        TEXT="Methanolleitung"
      }
      TEXT_GRAPHIC
      {
        NAME="{C06C06C1-032A-43A3-9A60-E68B86CFD5B4}"
        ORIGIN= { X=829 Y=220 }
        END= { X=883 Y=234 }
        TEXT="Xylolleitung"
      }
      TEXT_GRAPHIC
      {
        NAME="{C44AE327-78A2-4518-A153-9CC24C0B0F0F}"
        ORIGIN= { X=845 Y=1762 }
        END= { X=907 Y=1776 }
        TEXT="Bezug Q2300"
      }
      TEXT_GRAPHIC
      {
        NAME="{4EA7D554-4660-4C89-B101-DF95CD57F4B0}"
        ORIGIN= { X=858 Y=2328 }
        END= { X=925 Y=2342 }
        TEXT="Spülen Z1150"
      }
      TEXT_GRAPHIC
      {
        NAME="{BD1259C8-49B5-4A75-A805-14E595397A89}"
        ORIGIN= { X=856 Y=2455 }
        END= { X=945 Y=2469 }
        TEXT="Entleeren in P1420"
      }
    }
    STEP NAME="START" DEFINITION=""
    {
      DESCRIPTION=""
      RECTANGLE= { X=490 Y=10 H=40 W=100 }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_DUMMY:1" DEFINITION="UP_DUMMY"
    {
      DESCRIPTION=""
      RECTANGLE= { X=5 Y=2758 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=F
      KEY_PARAMETER=""
    }
    STEP NAME="UP_DUMMY:2" DEFINITION="UP_DUMMY"
    {
      DESCRIPTION=""
      RECTANGLE= { X=405 Y=2758 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=F
      KEY_PARAMETER=""
    }
    STEP NAME="UP_DUMMY:3" DEFINITION="UP_DUMMY"
    {
      DESCRIPTION=""
      RECTANGLE= { X=695 Y=2760 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=F
      KEY_PARAMETER=""
    }
    STEP NAME="UP_DUMMY_P105:1" DEFINITION="UP_DUMMY_P105"
    {
      DESCRIPTION=""
      RECTANGLE= { X=695 Y=2670 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=F
      KEY_PARAMETER=""
    }
    STEP NAME="UP_DUMMY_Q2300:1" DEFINITION="UP_DUMMY_Q2300"
    {
      DESCRIPTION=""
      RECTANGLE= { X=405 Y=2668 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=F
      KEY_PARAMETER=""
    }
    STEP NAME="UP_DUMMY_Q2800:1" DEFINITION="UP_DUMMY_Q2800"
    {
      DESCRIPTION=""
      RECTANGLE= { X=5 Y=2668 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=F
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_1TR:1" DEFINITION="UP_P105_1TR"
    {
      DESCRIPTION=""
      RECTANGLE= { X=680 Y=1780 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_FSB_LI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_D"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPTION_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH_I"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH_I"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TALL_I"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_W_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_HH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_L"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_LL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_SC_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_MENGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_PUMPE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SENDER"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SENDER_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUEL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUELZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_START"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_UTBR_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_UTBR_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_UTBR_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_UTBR_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_ZAEHL_ST"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SENDER"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="Q2300"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_EMPF_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W7"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SENDER_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W1"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHRER_SC_W"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_OPTION"
      {
        VALUE
        {
          SET="LGF_HK_OPT"
          STRING_VALUE="INNENTEMP"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_OPTION_HO"
      {
        VALUE
        {
          SET="LGF_HK_OPT"
          STRING_VALUE="INNENTEMP"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_W"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_W_HO"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_OPTION"
      {
        VALUE
        {
          SET="LGF_TR_FSB_OPT"
          STRING_VALUE="MAN ENDE"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SPUEL"
      {
        VALUE
        {
          SET="LGF_TR_SPUEL_OPT"
          STRING_VALUE="SENDER OHNE PUMPE - Spülen/Leerlaufen von Sender"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SPUELZEIT"
      {
        VALUE { CV=120 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_BESCHREI"
      {
        VALUE { CV="Bezug aus Q2300" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_JA1_NEIN2"
      {
        VALUE { CV=1 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_TEXT"
      {
        VALUE { CV="Bezug Q2300 starten?" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_UTBR_PSH"
      {
        VALUE { CV=2500 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_DEST:1" DEFINITION="UP_P105_DEST"
    {
      DESCRIPTION=""
      RECTANGLE= { X=690 Y=2040 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_DEST_EMPF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_LDS"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_LAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_MENGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_TR_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_TS_BRUED"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_ZAEHL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_BGR_D_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_BGR_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TAH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TAHH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KUHLEN_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KUHLEN_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KUHLEN_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KUHLEN_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KUHLEN_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MEDLEN_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTE_ZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_MSTELLE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_UBR_SH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_UBR_SL"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TCW"
      {
        VALUE { CV=140 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TCW_HO"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TAH_IN"
      {
        VALUE { CV=110 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TAHH_IN"
      {
        VALUE { CV=110 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_KUHLEN_TCW"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_KUHLEN_TCW_HO"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_MENGE"
      {
        VALUE { CV=500 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_ZAEHL"
      {
        VALUE
        {
          SET="LP_ZAEHLER"
          STRING_VALUE="I1176"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W2"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_EMPF"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="P121"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_LAH"
      {
        VALUE { CV=95 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_JA1_NEIN2"
      {
        VALUE { CV=1 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_OPT"
      {
        VALUE
        {
          SET="LGF_DRUCK_OPT"
          STRING_VALUE="ABLUFT1_AUF"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PCW"
      {
        VALUE { CV=50 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_BGR_H"
      {
        VALUE { CV=160 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_BGR_D_H"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PSH"
      {
        VALUE { CV=1000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PAL"
      {
        VALUE { CV=-1000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PALL"
      {
        VALUE { CV=-1000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_KK_TAH"
      {
        VALUE { CV=100 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_KK_TCW"
      {
        VALUE { CV=40 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_ENDE:1" DEFINITION="UP_P105_ENDE"
    {
      DESCRIPTION=""
      RECTANGLE= { X=695 Y=2570 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_ENTL_TR:1" DEFINITION="UP_P105_ENTL_TR"
    {
      DESCRIPTION=""
      RECTANGLE= { X=695 Y=2480 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_LL_FSB_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_LL_FSB_2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_LL_N2_ENDE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_AUF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_ZU"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_W_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_W_2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_EMPF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_EMPF_LAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_MANSTART"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_PUMPE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SEND_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUEL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUELZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_TSL"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHRER_W_1"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_EMPF"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="P1420"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_EMPF_LAH"
      {
        VALUE { CV=95 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_MANSTART"
      {
        VALUE
        {
          SET="LGF_TR_MANSTART"
          STRING_VALUE="JA"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SEND_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W3"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SPUEL"
      {
        VALUE
        {
          SET="LGF_TR_SPUEL_OPT"
          STRING_VALUE="SENDER OHNE PUMPE - Spülen/Leerlaufen von Sender"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SPUELZEIT"
      {
        VALUE { CV=15 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_PROBE:1" DEFINITION="UP_P105_PROBE"
    {
      DESCRIPTION=""
      RECTANGLE= { X=690 Y=2140 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_PROBE_FRAGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WÄHLEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_WÄHLEN_TEXT"
      {
        VALUE { CV="Probenahme spülen?" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_PROBE_FRAGE"
      {
        VALUE { CV="Spülen wiederholen?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_START:1" DEFINITION="UP_P105_START"
    {
      DESCRIPTION=""
      RECTANGLE= { X=670 Y=130 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_APP_ABLUFT_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_APP_SOLE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TCW"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW"
      {
        VALUE { CV=20 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW_HO"
      {
        VALUE { CV=20 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_TR:1" DEFINITION="UP_P105_TR"
    {
      DESCRIPTION=""
      RECTANGLE= { X=690 Y=2350 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BZG_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_EMPF_LAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_FSB_FQ"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_PUMPE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_SEND"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_SEND_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_SPUEL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_SPUELZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_START"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_ZAEHL_ST"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_BZG_ZAEHL_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MEDLEN_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_REGEL_STRAT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_REGLER_AH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_REGLER_W"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BZG_SEND"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="P105"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_BZG_SEND_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W4"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_BZG_SPUEL"
      {
        VALUE
        {
          SET="LGF_TR_SPUEL_OPT"
          STRING_VALUE="SENDER OHNE PUMPE - Spülen/Leerlaufen von Sender"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_BZG_BESCHREI"
      {
        VALUE { CV="Entleern in Z1150" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_TEXT"
      {
        VALUE { CV="Spülen in Z1150 starten?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_P105_VOR_ENTL:1" DEFINITION="UP_P105_VOR_ENTL"
    {
      DESCRIPTION=""
      RECTANGLE= { X=690 Y=2240 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BEGAS_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAL_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TALL_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDETEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_AUF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_ZU"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_SAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_SALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_SCW"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHRER_SCW"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TSH"
      {
        VALUE { CV=100 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW_HO"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDETEXT"
      {
        VALUE { CV="P105 bereit zum Entleeren?" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_TEXT"
      {
        VALUE { CV="P105 bereit zum Entleeren?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2300_1TR:1" DEFINITION="UP_Q2300_1TR"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1050 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_FSB_LI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_D_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHRER_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHRER_HH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHRER_L"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHRER_LL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHRER_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHRER_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_EMPF_LAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_MENGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_PUMPE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SEND"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SEND_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUEL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUELZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_START"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_UNTERB_MST"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_UNTERB_SH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_UNTERB_SL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_ZAEHL_ST"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_ZAEHL_WEG"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_RUEHRER_W"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_RUEHRER_OPT"
      {
        VALUE
        {
          SET="L_EIN_AUS"
          STRING_VALUE="EIN"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW_HO"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_OPT"
      {
        VALUE
        {
          SET="LGF_HK_OPT"
          STRING_VALUE="INNENTEMP"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_OPT_HO"
      {
        VALUE
        {
          SET="LGF_HK_OPT"
          STRING_VALUE="INNENTEMP"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_EMPF_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W2"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SEND"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="Q2800"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SEND_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W1"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_BESCHREI"
      {
        VALUE { CV="Edukt: Q2800" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SPUEL"
      {
        VALUE
        {
          SET="LGF_TR_SPUEL_OPT"
          STRING_VALUE="SENDER OHNE PUMPE - Spülen/Leerlaufen von Sender"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SPUELZEIT"
      {
        VALUE { CV=30 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_JA1_NEIN2"
      {
        VALUE { CV=1 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_TEXT"
      {
        VALUE { CV="Bezug Q2800 starten?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2300_DEST:1" DEFINITION="UP_Q2300_DEST"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1330 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_ABGAS_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_ABGAS_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_LAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_LDS"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_LSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_FQ"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_MANSTART"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_ZAEHL_ST"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PC_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_ENTSPANNEN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_FSB_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_D_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_FSB_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TC_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TC_W_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KÜHL_FSB_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KÜHL_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KÜHL_RAMPE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KÜHL_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KÜHL_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KÜHL_TC_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHREN_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RUEHREN_SCW"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TAH"
      {
        VALUE { CV=110 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TAHH"
      {
        VALUE { CV=110 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TC_W"
      {
        VALUE { CV=140 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TC_W_HO"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_BGR_H"
      {
        VALUE { CV=160 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_BGR_D_H"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PC_W"
      {
        VALUE { CV=50 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_EMPF"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="Z4030"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W2"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_EMPF_LAH"
      {
        VALUE { CV=95 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_ZAEHL_ST"
      {
        VALUE
        {
          SET="LP_ZAEHLER"
          STRING_VALUE="I1277"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_KÜHL_TC_W"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_FQ"
      {
        VALUE { CV=500 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PAH"
      {
        VALUE { CV=1100 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PAHH"
      {
        VALUE { CV=1200 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_OPTION"
      {
        VALUE
        {
          SET="LGF_DRUCK_OPT"
          STRING_VALUE="ABLUFT1_AUF"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_EMPF_LDS"
      {
        VALUE { CV=100000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_OPTION"
      {
        VALUE
        {
          SET="LGF_TR_FSB_OPT"
          STRING_VALUE="MENGE ZAEHLER"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_RUEHREN_SCW"
      {
        VALUE { CV=60 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2300_ENDE:1" DEFINITION="UP_Q2300_ENDE"
    {
      DESCRIPTION=""
      RECTANGLE= { X=405 Y=2570 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2300_ENTL:1" DEFINITION="UP_Q2300_ENTL"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1780 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_LL_FSB_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_LL_FSB_2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_LL_N2_AUS"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_AUF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_ZU"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_W_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_W_2"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_LL_FSB_2"
      {
        VALUE { CV=3500 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2300_PROBE:1" DEFINITION="UP_Q2300_PROBE"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1420 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_WÄHLEN_PROBE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WÄHLEN_WIEDERHOLEN"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_WÄHLEN_PROBE"
      {
        VALUE { CV="Probe spülen?" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_WÄHLEN_WIEDERHOLEN"
      {
        VALUE { CV="Spülen wiederholen?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2300_START:1" DEFINITION="UP_Q2300_START"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=130 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_APP_SOLE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_GRD_PAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_GRD_PALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_FAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_FALL"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW"
      {
        VALUE { CV=20 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW_HO"
      {
        VALUE { CV=20 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2300_VOR_ENTL:1" DEFINITION="UP_Q2300_VOR_ENTL"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1520 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BEGAS_FSB_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAL_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TALL_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDETEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_AUF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_ZU"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_SAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_SALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_SCW"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHRER_SCW"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW_HO"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PCW"
      {
        VALUE { CV=3000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDETEXT"
      {
        VALUE { CV="P105 bereit zum Bezug?" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_TEXT"
      {
        VALUE { CV="P105 bereit zum Bezug?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_1TR:1" DEFINITION="UP_Q2800_1TR"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=230 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_FSB_LI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAL_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TALL_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MEDLEN_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_HH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_L"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_LL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_MENGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_OPTION"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_PUMPE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SENDER"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SENDER_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUEL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_SPUELZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_START"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_TR_TSL"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHRER_W"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHRER_OPT"
      {
        VALUE
        {
          SET="L_EIN_AUS"
          STRING_VALUE="EIN"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_OPT"
      {
        VALUE
        {
          SET="LGF_HK_OPT"
          STRING_VALUE="INNENTEMP"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_OPT_HO"
      {
        VALUE
        {
          SET="LGF_HK_OPT"
          STRING_VALUE="INNENTEMP"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_EMPF_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W2"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_OPTION"
      {
        VALUE
        {
          SET="LGF_TR_FSB_OPT"
          STRING_VALUE="MAN ENDE"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_SENDER"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="Z1280"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_TR_BESCHREI"
      {
        VALUE { CV="Wasser" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_TEXT"
      {
        VALUE { CV="Bezug Wasser über Xylolleitung starten?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_DEST:1" DEFINITION="UP_Q2800_DEST"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=430 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_DEST_EMPF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_LDS"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_LAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_MENGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_TR_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_TS_BRUED"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_ZAEHL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_BGR_D_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_BGR_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TAH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TAHH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MEDLEN_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTE_ZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_MSTELLE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_UBR_SH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_UBR_SL"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TCW"
      {
        VALUE { CV=140 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TCW_HO"
      {
        VALUE { CV=70 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TAH_IN"
      {
        VALUE { CV=110 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TAHH_IN"
      {
        VALUE { CV=110 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_MENGE"
      {
        VALUE { CV=500 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_ZAEHL"
      {
        VALUE
        {
          SET="LP_ZAEHLER"
          STRING_VALUE="I1181"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_WEG"
      {
        VALUE
        {
          SET="LGF_WEG"
          STRING_VALUE="W2"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_EMPF"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="P5500"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_LAH"
      {
        VALUE { CV=9500 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_JA1_NEIN2"
      {
        VALUE { CV=1 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_WARTE_ZEIT"
      {
        VALUE { CV=100000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_OPT"
      {
        VALUE
        {
          SET="LGF_DRUCK_OPT"
          STRING_VALUE="ABLUFT1_AUF"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PCW"
      {
        VALUE { CV=50 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_BGR_H"
      {
        VALUE { CV=160 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_BGR_D_H"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PAL"
      {
        VALUE { CV=-1000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_PALL"
      {
        VALUE { CV=-1000 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_KK_TCW"
      {
        VALUE { CV=40 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_DEST:2" DEFINITION="UP_Q2800_DEST"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=520 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_DEST_EMPF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_LDS"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_EMPF_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_LAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_MENGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_TR_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_TS_BRUED"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_WEG"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DEST_ZAEHL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_BGR_D_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_BGR_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TAH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TAHH_IN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HEIZEN_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MEDLEN_BESCHREI"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTE_ZEIT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_MSTELLE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_UBR_SH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WARTEN_UBR_SL"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TCW"
      {
        VALUE { CV=140 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TCW_HO"
      {
        VALUE { CV=60 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HEIZEN_TAH_IN"
      {
        VALUE { CV=110 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_MENGE"
      {
        VALUE { CV=500 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_ZAEHL"
      {
        VALUE
        {
          SET="LP_ZAEHLER"
          STRING_VALUE="I1177"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_EMPF"
      {
        VALUE
        {
          SET="LP_UNITS"
          STRING_VALUE="P125"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DEST_LAH"
      {
        VALUE { CV=95 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_JA1_NEIN2"
      {
        VALUE { CV=2 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_DRUCK_OPT"
      {
        VALUE
        {
          SET="LGF_DRUCK_OPT"
          STRING_VALUE="ABLUFT1_AUF"
          CHANGEABLE=F
        }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_DEST_AUS:1" DEFINITION="UP_Q2800_DEST_AUS"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=620 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_ENTSPANNEN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_D_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_BGR_H"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_FSB_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_RAMPE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TC_W"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TSH"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TC_W"
      {
        VALUE { CV=60 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_ENDE:1" DEFINITION="UP_Q2800_ENDE"
    {
      DESCRIPTION=""
      RECTANGLE= { X=5 Y=2570 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_ENTL:1" DEFINITION="UP_Q2800_ENTL"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=1050 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_LL_FSB_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_LL_FSB_2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_LL_N2_ENDE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_AUF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_ZU"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_W_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHRER_W_2"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHRER_W_1"
      {
        VALUE { CV=40 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_MELDEN:1" DEFINITION="UP_Q2800_MELDEN"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=320 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDETEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDETEXT"
      {
        VALUE { CV="P5500 und P125 enthält kein Thionylchlorid mehr?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_PROBE:1" DEFINITION="UP_Q2800_PROBE"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=730 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_NAECHSTE_PROBE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_PROBE_FRAGE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_WÄHLEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_WÄHLEN_TEXT"
      {
        VALUE { CV="Probenahme spülen?" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_PROBE_FRAGE"
      {
        VALUE { CV="Spülen wiederholen?" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_NAECHSTE_PROBE"
      {
        VALUE { CV=0 }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_START:1" DEFINITION="UP_Q2800_START"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=130 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_ABGAS_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_ABGAS_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_APP_ABLUFT_1"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_APP_ABLUFT_2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_APP_SOLE"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_KK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_SIS_EIN"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_SIS_PRODUKT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW_HO"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_KK_TCW"
      {
        VALUE { CV=0 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_SIS_EIN"
      {
        VALUE
        {
          SET="LGF_BEDING_DI"
          STRING_VALUE="True"
          CHANGEABLE=F
        }
      }
      ATTRIBUTE_INSTANCE NAME="FP_SIS_PRODUKT"
      {
        VALUE { CV="Q2800_IODOS3_SIS" }
      }
      ATTRIBUTE_INSTANCE NAME="FP_APP_ABLUFT_1"
      {
        VALUE
        {
          SET="LP_ABLUFT"
          STRING_VALUE="S511"
          CHANGEABLE=F
        }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_Q2800_VOR_ENTL:1" DEFINITION="UP_Q2800_VOR_ENTL"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=820 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BEGAS_PSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_DRUCK_PCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_OPT_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAHH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TAL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TALL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TCW_HO"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TSH"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_HK_TSL"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_JA1_NEIN2"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_MELDEN_TEXT"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_AUF"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_N2_ZU"
      {
        ORIGIN=CONSTANT
      }
      STEP_PARAMETER NAME="FP_RÜHREN_W"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TSH"
      {
        VALUE { CV=55 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW"
      {
        VALUE { CV=20 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_HK_TCW_HO"
      {
        VALUE { CV=20 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_N2_ZU"
      {
        VALUE { CV=550 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_N2_AUF"
      {
        VALUE { CV=500 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_RÜHREN_W"
      {
        VALUE { CV=40 }
      }
      ATTRIBUTE_INSTANCE NAME="FP_MELDEN_TEXT"
      {
        VALUE { CV="Q2300 bereit zum Bezug?" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_P105:1" DEFINITION="UP_WARTEN_P105"
    {
      DESCRIPTION=""
      RECTANGLE= { X=680 Y=1630 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="Q2300" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_P105:2" DEFINITION="UP_WARTEN_P105"
    {
      DESCRIPTION=""
      RECTANGLE= { X=680 Y=1890 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="Q2300" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_Q2300:1" DEFINITION="UP_WARTEN_Q2300"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=920 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="Q2800" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_Q2300:2" DEFINITION="UP_WARTEN_Q2300"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1140 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="Q2800" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_Q2300:3" DEFINITION="UP_WARTEN_Q2300"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1630 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="P105" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_Q2300:4" DEFINITION="UP_WARTEN_Q2300"
    {
      DESCRIPTION=""
      RECTANGLE= { X=400 Y=1890 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="P105" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_Q2800:1" DEFINITION="UP_WARTEN_Q2800"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=920 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="Q2300" }
      }
      KEY_PARAMETER=""
    }
    STEP NAME="UP_WARTEN_Q2800:3" DEFINITION="UP_WARTEN_Q2800"
    {
      DESCRIPTION=""
      RECTANGLE= { X=10 Y=1140 H=30 W=240 }
      ACQUIRE_UNIT=F
      RETAIN_UNIT=T
      STEP_PARAMETER NAME="FP_BESCHREI_TEXT"
      {
        ORIGIN=CONSTANT
      }
      ATTRIBUTE_INSTANCE NAME="FP_BESCHREI_TEXT"
      {
        VALUE { CV="Q2300" }
      }
      KEY_PARAMETER=""
    }
    INITIAL_STEP="START"
    TRANSITION NAME="T1"
    {
      POSITION= { X=510 Y=70 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T10"
    {
      POSITION= { X=120 Y=780 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_PROBE:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T12"
    {
      POSITION= { X=120 Y=570 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_DEST:2/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T14"
    {
      POSITION= { X=120 Y=280 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_1TR:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T18"
    {
      POSITION= { X=120 Y=180 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_START:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T2"
    {
      POSITION= { X=510 Y=180 }
      TERMINATION=F
      EXPRESSION="'UP_Q2300_START:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T23"
    {
      POSITION= { X=310 Y=1220 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T24"
    {
      POSITION= { X=115 Y=2620 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_ENDE:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T25"
    {
      POSITION= { X=115 Y=2718 }
      TERMINATION=F
      EXPRESSION="'UP_DUMMY_Q2800:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T26"
    {
      POSITION= { X=515 Y=2840 }
      TERMINATION=T
      EXPRESSION="'UP_DUMMY:1/BSTATUS' = '$recipe_state:Complete' 
AND 'UP_DUMMY:3/BSTATUS' = '$recipe_state:Complete' 
AND 'UP_DUMMY:2/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T27"
    {
      POSITION= { X=510 Y=1100 }
      TERMINATION=F
      EXPRESSION="'UP_Q2300_1TR:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T3"
    {
      POSITION= { X=120 Y=870 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_VOR_ENTL:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T31"
    {
      POSITION= { X=510 Y=1385 }
      TERMINATION=F
      EXPRESSION="'UP_Q2300_DEST:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T33"
    {
      POSITION= { X=510 Y=1580 }
      TERMINATION=F
      EXPRESSION="'UP_Q2300_VOR_ENTL:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T34"
    {
      POSITION= { X=660 Y=1700 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T35"
    {
      POSITION= { X=510 Y=1830 }
      TERMINATION=F
      EXPRESSION="'UP_Q2300_ENTL:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T37"
    {
      POSITION= { X=660 Y=1970 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T38"
    {
      POSITION= { X=515 Y=2620 }
      TERMINATION=F
      EXPRESSION="'UP_Q2300_ENDE:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T39"
    {
      POSITION= { X=515 Y=2718 }
      TERMINATION=F
      EXPRESSION="'UP_DUMMY_Q2300:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T4"
    {
      POSITION= { X=320 Y=1000 }
      TERMINATION=F
      EXPRESSION="TRUE"
    }
    TRANSITION NAME="T40"
    {
      POSITION= { X=780 Y=180 }
      TERMINATION=F
      EXPRESSION="'UP_P105_START:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T41"
    {
      POSITION= { X=790 Y=1840 }
      TERMINATION=F
      EXPRESSION="'UP_P105_1TR:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T5"
    {
      POSITION= { X=120 Y=1100 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_ENTL:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T50"
    {
      POSITION= { X=800 Y=2090 }
      TERMINATION=F
      EXPRESSION="'UP_P105_DEST:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T52"
    {
      POSITION= { X=800 Y=2200 }
      TERMINATION=F
      EXPRESSION="'UP_P105_PROBE:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T53"
    {
      POSITION= { X=120 Y=480 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_DEST:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T54"
    {
      POSITION= { X=800 Y=2290 }
      TERMINATION=F
      EXPRESSION="'UP_P105_VOR_ENTL:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T55"
    {
      POSITION= { X=805 Y=2530 }
      TERMINATION=F
      EXPRESSION="'UP_P105_ENTL_TR:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T56"
    {
      POSITION= { X=510 Y=1470 }
      TERMINATION=F
      EXPRESSION="'UP_Q2300_PROBE:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T57"
    {
      POSITION= { X=805 Y=2720 }
      TERMINATION=F
      EXPRESSION="'UP_DUMMY_P105:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T58"
    {
      POSITION= { X=805 Y=2620 }
      TERMINATION=F
      EXPRESSION="'UP_P105_ENDE:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T6"
    {
      POSITION= { X=120 Y=670 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_DEST_AUS:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T7"
    {
      POSITION= { X=120 Y=370 }
      TERMINATION=F
      EXPRESSION="'UP_Q2800_MELDEN:1/BSTATUS' = '$recipe_state:Complete'"
    }
    TRANSITION NAME="T8"
    {
      POSITION= { X=800 Y=2400 }
      TERMINATION=F
      EXPRESSION="'UP_P105_TR:1/BSTATUS' = '$recipe_state:Complete'"
    }
    STEP_TRANSITION_CONNECTION STEP="START" TRANSITION="T1" { }
    STEP_TRANSITION_CONNECTION STEP="UP_DUMMY:1" TRANSITION="T26" { }
    STEP_TRANSITION_CONNECTION STEP="UP_DUMMY:2" TRANSITION="T26" { }
    STEP_TRANSITION_CONNECTION STEP="UP_DUMMY:3" TRANSITION="T26" { }
    STEP_TRANSITION_CONNECTION STEP="UP_DUMMY_P105:1" TRANSITION="T57" { }
    STEP_TRANSITION_CONNECTION STEP="UP_DUMMY_Q2300:1" TRANSITION="T39" { }
    STEP_TRANSITION_CONNECTION STEP="UP_DUMMY_Q2800:1" TRANSITION="T25" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_1TR:1" TRANSITION="T41" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_DEST:1" TRANSITION="T50" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_ENDE:1" TRANSITION="T58" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_ENTL_TR:1" TRANSITION="T55" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_PROBE:1" TRANSITION="T52" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_START:1" TRANSITION="T40" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_TR:1" TRANSITION="T8" { }
    STEP_TRANSITION_CONNECTION STEP="UP_P105_VOR_ENTL:1" TRANSITION="T54" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2300_1TR:1" TRANSITION="T27" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2300_DEST:1" TRANSITION="T31" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2300_ENDE:1" TRANSITION="T38" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2300_ENTL:1" TRANSITION="T35" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2300_PROBE:1" TRANSITION="T56" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2300_START:1" TRANSITION="T2" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2300_VOR_ENTL:1" TRANSITION="T33" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_1TR:1" TRANSITION="T14" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_DEST:1" TRANSITION="T53" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_DEST:2" TRANSITION="T12" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_DEST_AUS:1" TRANSITION="T6" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_ENDE:1" TRANSITION="T24" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_ENTL:1" TRANSITION="T5" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_MELDEN:1" TRANSITION="T7" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_PROBE:1" TRANSITION="T10" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_START:1" TRANSITION="T18" { }
    STEP_TRANSITION_CONNECTION STEP="UP_Q2800_VOR_ENTL:1" TRANSITION="T3" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_P105:1" TRANSITION="T34" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_P105:2" TRANSITION="T37" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_Q2300:1" TRANSITION="T4" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_Q2300:2" TRANSITION="T23" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_Q2300:3" TRANSITION="T34" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_Q2300:4" TRANSITION="T37" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_Q2800:1" TRANSITION="T4" { }
    STEP_TRANSITION_CONNECTION STEP="UP_WARTEN_Q2800:3" TRANSITION="T23" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="UP_Q2800_START:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="UP_Q2300_START:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T1" STEP="UP_P105_START:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T10" STEP="UP_Q2800_VOR_ENTL:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T12" STEP="UP_Q2800_DEST_AUS:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T14" STEP="UP_Q2800_MELDEN:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T18" STEP="UP_Q2800_1TR:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T2" STEP="UP_WARTEN_Q2300:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T23" STEP="UP_Q2800_ENDE:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T23" STEP="UP_Q2300_DEST:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T24" STEP="UP_DUMMY_Q2800:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T25" STEP="UP_DUMMY:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T27" STEP="UP_WARTEN_Q2300:2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T3" STEP="UP_WARTEN_Q2800:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T31" STEP="UP_Q2300_PROBE:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T33" STEP="UP_WARTEN_Q2300:3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T34" STEP="UP_Q2300_ENTL:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T34" STEP="UP_P105_1TR:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T35" STEP="UP_WARTEN_Q2300:4" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T37" STEP="UP_Q2300_ENDE:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T37" STEP="UP_P105_DEST:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T38" STEP="UP_DUMMY_Q2300:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T39" STEP="UP_DUMMY:2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T4" STEP="UP_Q2800_ENTL:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T4" STEP="UP_Q2300_1TR:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T40" STEP="UP_WARTEN_P105:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T41" STEP="UP_WARTEN_P105:2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T5" STEP="UP_WARTEN_Q2800:3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T50" STEP="UP_P105_PROBE:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T52" STEP="UP_P105_VOR_ENTL:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T53" STEP="UP_Q2800_DEST:2" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T54" STEP="UP_P105_TR:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T55" STEP="UP_P105_ENDE:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T56" STEP="UP_Q2300_VOR_ENTL:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T57" STEP="UP_DUMMY:3" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T58" STEP="UP_DUMMY_P105:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T6" STEP="UP_Q2800_PROBE:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T7" STEP="UP_Q2800_DEST:1" { }
    TRANSITION_STEP_CONNECTION TRANSITION="T8" STEP="UP_P105_ENTL_TR:1" { }
  }
}
`