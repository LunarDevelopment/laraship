/**
 * עברית translation
 * @author Yaron Shahrabani <sh.yaron@gmail.com>
 * @version 2015-11-02
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['elfinder'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('elfinder'));
    } else {
        factory(root.elFinder);
    }
}(this, function (elFinder) {
    elFinder.prototype.i18.he = {
        translator: 'Yaron Shahrabani <sh.yaron@gmail.com>',
        language: 'עברית',
        direction: 'rtl',
        dateFormat: 'd.m.Y H:i', // Mar 13, 2012 05:27 PM
        fancyDateFormat: '$1 H:i', // will produce smth like: Today 12:25 PM
        messages: {

            /********************************** errors **********************************/
            'error': 'שגיאה',
            'errUnknown': 'שגיאה בלתי מוכרת.',
            'errUnknownCmd': 'פקודה בלתי מוכרת.',
            'errJqui': 'תצורת ה־jQuery UI שגויה. יש לכלול רכיבים הניתנים לבחירה, גרירה והשלכה.',
            'errNode': 'elFinder דורש יצירה של רכיב DOM.',
            'errURL': 'התצורה של elFinder שגויה! אפשרות הכתובת (URL) לא הוגדרה.',
            'errAccess': 'הגישה נדחית.',
            'errConnect': 'לא ניתן להתחבר למנגנון.',
            'errAbort': 'החיבור בוטל.',
            'errTimeout': 'זמן החיבור פג.',
            'errNotFound': 'לא נמצא מנגנון.',
            'errResponse': 'תגובת המנגנון שגויה.',
            'errConf': 'תצורת המנגנון שגויה.',
            'errJSON': 'המודול PHP JSON לא מותקן.',
            'errNoVolumes': 'אין כוננים זמינים לקריאה.',
            'errCmdParams': 'פרמטרים שגויים לפקודה „$1“.',
            'errDataNotJSON': 'הנתונים אינם JSON.',
            'errDataEmpty': 'הנתונים ריקים.',
            'errCmdReq': 'בקשה למנגנון דורשת שם פקודה.',
            'errOpen': 'לא ניתן לפתוח את „$1“.',
            'errNotFolder': 'הפריט אינו תיקייה.',
            'errNotFile': 'הפריט אינו קובץ.',
            'errRead': 'לא ניתן לקרוא את „$1“.',
            'errWrite': 'לא ניתן לכתוב אל „$1“.',
            'errPerm': 'ההרשאה נדחתה.',
            'errLocked': '„$1“ נעול ואין אפשרות לשנות את שמו, להעבירו או להסירו.',
            'errExists': 'קובץ בשם „$1“ כבר קיים.',
            'errInvName': 'שם הקובץ שגוי.',
            'errFolderNotFound': 'התיקייה לא נמצאה.',
            'errFileNotFound': 'הקובץ לא נמצא.',
            'errTrgFolderNotFound': 'תיקיית היעד „$1“ לא נמצאה.',
            'errPopup': 'הדפדפן מנע פתיחת חלון קובץ. כדי לפתוח קובץ יש לאפשר זאת בהגדרות הדפדפן.',
            'errMkdir': 'לא ניתן ליצור את התיקייה „$1“.',
            'errMkfile': 'לא ניתן ליצור את הקובץ „$1“.',
            'errRename': 'לא ניתן לשנות את השם של „$1“.',
            'errCopyFrom': 'העתקת קבצים מהכונן „$1“ אינה מאופשרת.',
            'errCopyTo': 'העתקת קבצים אל הכונן „$1“ אינה מאופשרת.',
            'errUpload': 'שגיאת העלאה.',  // old name - errUploadCommon
            'errUploadFile': 'לא ניתן להעלות את „$1“.', // old name - errUpload
            'errUploadNoFiles': 'לא נמצאו קבצים להעלאה.',
            'errUploadTotalSize': 'הנתונים חורגים מהגודל המרבי המותר.', // old name - errMaxSize
            'errUploadFileSize': 'הקובץ חורג מהגודל המרבי המותר.', //  old name - errFileMaxSize
            'errUploadMime': 'סוג הקובץ אינו מורשה.',
            'errUploadTransfer': 'שגיאת העברה „$1“.',
            'errNotReplace': 'הפריט „$1“ כבר קיים במיקום זה ואי אפשר להחליפו בפריט מסוג אחר.', // new
            'errReplace': 'לא ניתן להחליף את „$1“.',
            'errSave': 'לא ניתן לשמור את „$1“.',
            'errCopy': 'לא ניתן להעתיק את „$1“.',
            'errMove': 'לא ניתן להעביר את „$1“.',
            'errCopyInItself': 'לא ניתן להעתיק את „$1“ לתוך עצמו.',
            'errRm': 'לא ניתן להסיר את „$1“.',
            'errRmSrc': 'לא ניתן להסיר את קובצי המקור.',
            'errExtract': 'לא ניתן לחלץ קבצים מהארכיון „$1“.',
            'errArchive': 'לא ניתן ליצור ארכיון.',
            'errArcType': 'סוג הארכיון אינו נתמך.',
            'errNoArchive': 'הקובץ אינו ארכיון או שסוג הקובץ שלו אינו נתמך.',
            'errCmdNoSupport': 'המנגנון אינו תומך בפקודה זו.',
            'errReplByChild': 'לא ניתן להחליף את התיקייה „$1“ בפריט מתוכה.',
            'errArcSymlinks': 'מטעמי אבטחה לא ניתן לחלץ ארכיונים שמכילים קישורים סימבוליים או קבצים עם שמות בלתי מורשים.', // edited 24.06.2012
            'errArcMaxSize': 'הארכיון חורג מהגודל המרבי המותר.',
            'errResize': 'לא ניתן לשנות את הגודל של „$1“.',
            'errResizeDegree': 'מעלות ההיפוך שגויות.',  // added 7.3.2013
            'errResizeRotate': 'לא ניתן להפוך את התמונה.',  // added 7.3.2013
            'errResizeSize': 'גודל התמונה שגוי.',  // added 7.3.2013
            'errResizeNoChange': 'גודל התמונה לא השתנה.',  // added 7.3.2013
            'errUsupportType': 'סוג הקובץ אינו נתמך.',
            'errNotUTF8Content': 'הקובץ „$1“ הוא לא בתסדיר UTF-8 ולא ניתן לערוך אותו.',  // added 9.11.2011
            'errNetMount': 'לא ניתן לעגן את „$1“.', // added 17.04.2012
            'errNetMountNoDriver': 'פרוטוקול בלתי נתמך.',     // added 17.04.2012
            'errNetMountFailed': 'העיגון נכשל.',         // added 17.04.2012
            'errNetMountHostReq': 'נדרש מארח.', // added 18.04.2012
            'errSessionExpires': 'ההפעלה שלך פגה עקב חוסר פעילות.',
            'errCreatingTempDir': 'לא ניתן ליצור תיקייה זמנית: „$1“',
            'errFtpDownloadFile': 'לא ניתן להוריד קובץ מ־ FTP: „$1“',
            'errFtpUploadFile': 'לא ניתן להעלות קובץ ל־FTP: „$1“',
            'errFtpMkdir': 'לא ניתן ליצור תיקייה מרוחקת ב־FTP: „$1“',
            'errArchiveExec': 'שמירת הקבצים בארכיון נכשלה: „$1“',
            'errExtractExec': 'חילוץ קבצים נכשל: „$1“',

            /******************************* commands names ********************************/
            'cmdarchive': 'יצירת ארכיון',
            'cmdback': 'חזרה',
            'cmdcopy': 'העתקה',
            'cmdcut': 'גזירה',
            'cmddownload': 'הורדה',
            'cmdduplicate': 'שכפול',
            'cmdedit': 'עריכת קובץ',
            'cmdextract': 'חילוץ קבצים מארכיון',
            'cmdforward': 'העברה',
            'cmdgetfile': 'בחירת קבצים',
            'cmdhelp': 'פרטים על התכנית הזו',
            'cmdhome': 'בית',
            'cmdinfo': 'קבלת מידע',
            'cmdmkdir': 'תיקייה חדשה',
            'cmdmkfile': 'קובץ טקסט חדש',
            'cmdopen': 'פתיחה',
            'cmdpaste': 'הדבקה',
            'cmdquicklook': 'תצוגה מקדימה',
            'cmdreload': 'רענון',
            'cmdrename': 'שינוי שם',
            'cmdrm': 'מחיקה',
            'cmdsearch': 'חיפוש קבצים',
            'cmdup': 'מעבר לתיקיית ההורה',
            'cmdupload': 'העלאת קבצים',
            'cmdview': 'תצוגה',
            'cmdresize': 'שינוי גודל והיפוך',
            'cmdsort': 'מיון',
            'cmdnetmount': 'עיגון כונן רשת', // added 18.04.2012

            /*********************************** buttons ***********************************/
            'btnClose': 'סגירה',
            'btnSave': 'שמירה',
            'btnRm': 'הסרה',
            'btnApply': 'החלה',
            'btnCancel': 'ביטול',
            'btnNo': 'לא',
            'btnYes': 'כן',
            'btnMount': 'עיגון',  // added 18.04.2012

            /******************************** notifications ********************************/
            'ntfopen': 'פתיחת תיקייה',
            'ntffile': 'פתיחת קובץ',
            'ntfreload': 'רענון תוכן התיקייה',
            'ntfmkdir': 'תיקייה נוצרת',
            'ntfmkfile': 'קבצים נוצרים',
            'ntfrm': 'קבצים נמחקים',
            'ntfcopy': 'קבצים מועתקים',
            'ntfmove': 'קבצים מועברים',
            'ntfprepare': 'העתקת קבצים בהכנה',
            'ntfrename': 'שמות קבצים משתנים',
            'ntfupload': 'קבצים נשלחים',
            'ntfdownload': 'קבצים מתקבלים',
            'ntfsave': 'שמירת קבצים',
            'ntfarchive': 'ארכיון נוצר',
            'ntfextract': 'מחולצים קבצים מארכיון',
            'ntfsearch': 'קבצים בחיפוש',
            'ntfresize': 'גודל קבצים משתנה',
            'ntfsmth': 'מתבצעת פעולה',
            'ntfloadimg': 'נטענת תמונה',
            'ntfnetmount': 'כונן רשת מעוגן', // added 18.04.2012
            'ntfdim': 'ממדי תמונה מתקבלים', // added 20.05.2013

            /************************************ dates **********************************/
            'dateUnknown': 'לא ידוע',
            'Today': 'היום',
            'Yesterday': 'מחר',
            'msJan': 'ינו׳',
            'msFeb': 'פבר׳',
            'msMar': 'מרץ',
            'msApr': 'אפר׳',
            'msMay': 'מאי',
            'msJun': 'יונ׳',
            'msJul': 'יול׳',
            'msAug': 'אוג׳',
            'msSep': 'ספט׳',
            'msOct': 'אוק׳',
            'msNov': 'נוב׳',
            'msDec': 'דצמ׳',
            'January': 'ינואר',
            'February': 'פברואר',
            'March': 'מרץ',
            'April': 'אפריל',
            'May': 'מאי',
            'June': 'יוני',
            'July': 'יולי',
            'August': 'אוגוסט',
            'September': 'ספטמבר',
            'October': 'אוקטובר',
            'November': 'נובמבר',
            'December': 'דצמבר',
            'Sunday': 'יום ראשון',
            'Monday': 'יום שני',
            'Tuesday': 'יום שלישי',
            'Wednesday': 'יום רביעי',
            'Thursday': 'יום חמישי',
            'Friday': 'יום שישי',
            'Saturday': 'שבת',
            'Sun': 'א׳',
            'Mon': 'ב׳',
            'Tue': 'ג׳',
            'Wed': 'ד׳',
            'Thu': 'ה',
            'Fri': 'ו׳',
            'Sat': 'ש׳',

            /******************************** sort variants ********************************/
            'sortname': 'לפי שם',
            'sortkind': 'לפי סוג',
            'sortsize': 'לפי גודל',
            'sortdate': 'לפי תאריך',
            'sortFoldersFirst': 'תיקיות תחילה',

            /********************************** messages **********************************/
            'confirmReq': 'נדרש אישור',
            'confirmRm': 'להסיר את הקבצים?<br/>פעולה זו בלתי הפיכה!',
            'confirmRepl': 'להחליף קובץ ישן בקובץ חדש?',
            'apllyAll': 'להחיל על הכול',
            'name': 'שם',
            'size': 'גודל',
            'perms': 'הרשאות',
            'modify': 'שינוי',
            'kind': 'סוג',
            'read': 'קריאה',
            'write': 'כתיבה',
            'noaccess': 'אין גישה',
            'and': 'וגם',
            'unknown': 'לא ידוע',
            'selectall': 'בחירת כל הקבצים',
            'selectfiles': 'בחירת קובץ אחד ומעלה',
            'selectffile': 'בחירת הקובץ הראשון',
            'selectlfile': 'בחירת הקובץ האחרון',
            'viewlist': 'תצוגת רשימה',
            'viewicons': 'תצוגת סמלים',
            'places': 'מיקומים',
            'calc': 'חישוב',
            'path': 'נתיב',
            'aliasfor': 'כינוי עבור',
            'locked': 'נעול',
            'dim': 'ממדים',
            'files': 'קבצים',
            'folders': 'תיקיות',
            'items': 'פריטים',
            'yes': 'כן',
            'no': 'לא',
            'link': 'קישור',
            'searcresult': 'תוצאות חיפוש',
            'selected': 'קבצים נבחרים',
            'about': 'על אודות',
            'shortcuts': 'קיצורי דרך',
            'help': 'עזרה',
            'webfm': 'מנהל קבצים בדפדפן',
            'ver': 'גרסה',
            'protocolver': 'גרסת פרוטוקול',
            'homepage': 'דף הבית של המיזם',
            'docs': 'תיעוד',
            'github': 'פילוג עותק ב־Github',
            'twitter': 'לעקוב אחרינו בטוויטר',
            'facebook': 'להצטרף אלינו בפייסבוק',
            'team': 'צוות',
            'chiefdev': 'מפתח ראשי',
            'developer': 'מתכנת',
            'contributor': 'תורם',
            'maintainer': 'מתחזק',
            'translator': 'מתרגם',
            'icons': 'סמלים',
            'dontforget': 'לא לשכוח לקחת את המגבת שלך',
            'shortcutsof': 'קיצורי הדרך מנוטרלים',
            'dropFiles': 'ניתן להשליך את הקבצים לכאן',
            'or': 'או',
            'selectForUpload': 'לבחור קבצים להעלאה',
            'moveFiles': 'העברת קבצים',
            'copyFiles': 'העתקת קבצים',
            'rmFromPlaces': 'הסרה ממיקומים',
            'aspectRatio': 'יחס תצוגה',
            'scale': 'מתיחה',
            'width': 'רוחב',
            'height': 'גובה',
            'resize': 'שינוי הגודל',
            'crop': 'חיתוך',
            'rotate': 'היפוך',
            'rotate-cw': 'היפוך ב־90 מעלות נגד השעון',
            'rotate-ccw': 'היפוך ב־90 מעלות עם השעון CCW',
            'degree': '°',
            'netMountDialogTitle': 'עיגון כונן רשת', // added 18.04.2012
            'protocol': 'פרוטוקול', // added 18.04.2012
            'host': 'מארח', // added 18.04.2012
            'port': 'פתחה', // added 18.04.2012
            'user': 'משתמש', // added 18.04.2012
            'pass': 'ססמה', // added 18.04.2012

            /********************************** mimetypes **********************************/
            'kindUnknown': 'בלתי ידוע',
            'kindFolder': 'תיקייה',
            'kindAlias': 'כינוי',
            'kindAliasBroken': 'כינוי שבור',
            // applications
            'kindApp': 'יישום',
            'kindPostscript': 'מסמך Postscript',
            'kindMsOffice': 'מסמך Microsoft Office',
            'kindMsWord': 'מסמך Microsoft Word',
            'kindMsExcel': 'מסמך Microsoft Excel',
            'kindMsPP': 'מצגת Microsoft Powerpoint',
            'kindOO': 'מסמך Open Office',
            'kindAppFlash': 'יישום Flash',
            'kindPDF': 'Portable Document Format (PDF)',
            'kindTorrent': 'קובץ Bittorrent',
            'kind7z': 'ארכיון 7z',
            'kindTAR': 'ארכיון TAR',
            'kindGZIP': 'ארכיון GZIP',
            'kindBZIP': 'ארכיון BZIP',
            'kindXZ': 'ארכיון XZ',
            'kindZIP': 'ארכיון ZIP',
            'kindRAR': 'ארכיון RAR',
            'kindJAR': 'קובץ JAR של Java',
            'kindTTF': 'גופן True Type',
            'kindOTF': 'גופן Open Type',
            'kindRPM': 'חבילת RPM',
            // texts
            'kindText': 'מסמך טקסט',
            'kindTextPlain': 'טקסט פשוט',
            'kindPHP': 'מקור PHP',
            'kindCSS': 'גיליון סגנון מדורג',
            'kindHTML': 'מסמך HTML',
            'kindJS': 'מקור Javascript',
            'kindRTF': 'תבנית טקסט עשיר',
            'kindC': 'מקור C',
            'kindCHeader': 'מקור כותרת C',
            'kindCPP': 'מקור C++',
            'kindCPPHeader': 'מקור כותרת C++',
            'kindShell': 'תסריט מעטפת יוניקס',
            'kindPython': 'מקור Python',
            'kindJava': 'מקור Java',
            'kindRuby': 'מקור Ruby',
            'kindPerl': 'תסריט Perl',
            'kindSQL': 'מקור SQL',
            'kindXML': 'מקור XML',
            'kindAWK': 'מקור AWK',
            'kindCSV': 'ערכים מופרדים בפסיקים',
            'kindDOCBOOK': 'מסמךDocbook XML',
            // images
            'kindImage': 'תמונה',
            'kindBMP': 'תמונת BMP',
            'kindJPEG': 'תמונת JPEG',
            'kindGIF': 'תמונת GIF',
            'kindPNG': 'תמונת PNG',
            'kindTIFF': 'תמונת TIFF',
            'kindTGA': 'תמונת TGA',
            'kindPSD': 'תמונת Adobe Photoshop',
            'kindXBITMAP': 'תמונת מפת סיביות X',
            'kindPXM': 'תמונת Pixelmator',
            // media
            'kindAudio': 'מדיה מסוג שמע',
            'kindAudioMPEG': 'שמע MPEG',
            'kindAudioMPEG4': 'שמע MPEG-4',
            'kindAudioMIDI': 'שמע MIDI',
            'kindAudioOGG': 'שמע Ogg Vorbis',
            'kindAudioWAV': 'שמע WAV',
            'AudioPlaylist': 'רשימת נגינה MP3',
            'kindVideo': 'מדיה מסוג וידאו',
            'kindVideoDV': 'סרטון DV',
            'kindVideoMPEG': 'סרטון MPEG',
            'kindVideoMPEG4': 'סרטון MPEG-4',
            'kindVideoAVI': 'סרטון AVI',
            'kindVideoMOV': 'סרטון Quick Time',
            'kindVideoWM': 'סרטון Windows Media',
            'kindVideoFlash': 'סרטון Flash',
            'kindVideoMKV': 'סרטון Matroska',
            'kindVideoOGG': 'סרטון Ogg'
        }
    };
}));

