export const useHelpers = () => {

    const ERROR_ICON = 'mdi mdi-alert-octagon-outline'
    const SUCCESS_ICON = 'mdi mdi-check'
    const INFO_ICON = 'mdi mdi-information-outline'
    const WARNING_ICON = 'mdi mdi-alert-outline'
    const ERROR_CODE = 400
    const SUCCESS_CODE = 200
    const WARNING_CODE = 300
    const INFO_CODE = 100

    const isEmptyObject = (obj) => {
        for(let key in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, key))
                return false;
        }
        return true;
    }

    const uuid = () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    const updatePageWaterMark = (waterMarkUpdate="") => {
        return waterMarkUpdate;
    }

    const processLaravelErrorsCollections = (errors) => {
        let errorMsg = ''
        for (const error of Object.values(errors)) {
            errorMsg += `${error.join(', ')}\n`
        }
        return errorMsg
    }

    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    const capitalizeSentence = (sentence) =>
        sentence
            .split(" ")
            .map(capitalize)
            .join(" ");

    const nameToInitials = (name) => {
        const words = name.trim().split(/\s+/); // handles extra spaces
        if (words.length === 0 || !words[0]) return "";
        
        return (words[0][0] + (words[1]?.[0] || "")).toUpperCase();
    };

    const displayedUserName = (name) => {
        const parts = name.trim().split(/\s+/); // Split by whitespace
      
        if (parts.length === 1) {
          return parts[0]; // Only one word, return as is
        }
      
        const firstName = parts[0];
        const initials = parts.slice(1).map(word => word[0].toLowerCase() + '.').join(' ');
        
        return capitalizeSentence(`${firstName} ${initials}`);
    }

    const areObjectsEqual = (obj1, obj2) => {
        try {
            const obj1Keys = Object.keys(obj1);
            const obj2Keys = Object.keys(obj2);
        
            if (obj1Keys.length !== obj2Keys.length) {
                return false;
            }
        
            for (let objKey of obj1Keys) {
                if (obj1[objKey] !== obj2[objKey]) {
                    return false;
                }
            }
        
            return true;
        } catch (err) {
            return false;
        }
    }

    const countOccurrences = (str, substr, options = { caseSensitive: true, allowOverlap: false }) => {
        if (typeof str !== 'string' || typeof substr !== 'string') {
            throw new TypeError("Both 'str' and 'substr' must be strings.");
        }

        if (substr === '') return str.length + 1;

        const { caseSensitive, allowOverlap } = options;
        const source = caseSensitive ? str : str.toLowerCase();
        const target = caseSensitive ? substr : substr.toLowerCase();

        let count = 0;
        let index = 0;

        while (index <= source.length - target.length) {
            if (source.substring(index, index + target.length) === target) {
                count++;
                index += allowOverlap ? 1 : target.length;
            } else {
                index++;
            }
        }

        return count;
    }

    const slugify = (text) =>
        text
          .normalize('NFKD') // Normalize accented characters
          .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumerics with dashes
          .replace(/^-+|-+$/g, '');    // Remove leading/trailing dashes


    const shuffleArray = (arr) => {
        const array = [...arr]; // create a copy to avoid mutating the original
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
        return array;
    };

    const dateFormatter = {
        regularDate: (d) => {
            try {
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                return `${da}-${mo}-${ye}`;
            } catch(ex) {
                const newDate = new Date(d)
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
                let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(newDate);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                return `${da}-${mo}-${ye}`;
            }
        },
    
        shortDate: (d) => {
            try {
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                return `${da} ${mo}, ${ye}`;
            } catch(ex) {
                const newDate = new Date(d)
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
                let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                return `${da} ${mo}, ${ye}`;
            }
        },
    
        longDate: (d) => {
            try {
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                return `${da} ${mo}, ${ye}`;
            } catch(ex) {
                const newDate = new Date(d)
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
                let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(newDate);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                return `${da} ${mo}, ${ye}`;
            }
        },
    
        getTime: (d) => {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            try {
                let hrs = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: false }).format(d);
                let mins = new Intl.DateTimeFormat('en', { minute: 'numeric', hour12: false  }).format(d);
                let secs = new Intl.DateTimeFormat('en', { second: 'numeric', hour12: false  }).format(d);
                return `${hrs}:${mins}:${secs}`;
            } catch(ex) {
                const newDate = new Date(d)
                let hrs = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: false }).format(newDate);
                let mins = new Intl.DateTimeFormat('en', { minute: 'numeric', hour12: false  }).format(newDate);
                let secs = new Intl.DateTimeFormat('en', { second: 'numeric', hour12: false  }).format(newDate);
                return `${hrs}:${mins}:${secs}`;
            }
        },
    
        showTimeDifference: (d) => {
            const oldTimer = new Date(d)
            const currTimer = new Date()
    
            const diff = (currTimer.getTime() - oldTimer.getTime())/1000
    
            if ((diff / 60) < 1 ) {
                return 'now'
            } else if ((diff / 60) >= 1  && (diff / 60) < 60 ) {
                const timeInMin = parseInt(diff / 60)
                const timeUnit = timeInMin > 1 ? "mins" : "min"
                return `${timeInMin} ${timeUnit}. ago`
            } else if ((diff / 60) >= 60  && (diff / 60) < 1440 ) {
                const timeInHr = parseInt(diff / 3600)
                const timeUnit = timeInHr > 1 ? "hrs" : "hr"
                return `${timeInHr} ${timeUnit}. ago`
            } else if ((diff / 60) >= 1440  && (diff / 60) < 10080 ) {
                const timeInDay = parseInt(diff / 86400)
                const timeUnit = timeInDay > 1 ? "days" : "day"
                return `${timeInDay} ${timeUnit} ago`
            } else if ((diff / 60) >= 10080) {
                const newDate = new Date(d)
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
                let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(newDate);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                return `${da}-${mo}-${ye}`;
            }
        }
    }

    const convertSecondsToHMS = (seconds) => {
        if (typeof seconds !== 'number' || seconds < 0) {
          throw new Error('Time must be a non-negative number');
        }
      
        const hours = Math.floor(seconds / 3600);
        const remainingAfterHours = seconds % 3600;
      
        const minutes = Math.floor(remainingAfterHours / 60);
        const remainingSeconds = remainingAfterHours % 60;
      
        return {
          hours,
          minutes,
          seconds: remainingSeconds
        };
      }

    const formatTimeObjectHMS = (timeObj) => {
        if (
          typeof timeObj !== 'object' ||
          typeof timeObj.hours !== 'number' ||
          typeof timeObj.minutes !== 'number' ||
          typeof timeObj.seconds !== 'number'
        ) {
          throw new Error('Input must be an object with hours, minutes, and seconds as numbers');
        }
      
        const parts = [];
      
        if (timeObj.hours > 0) {
          parts.push(`${timeObj.hours} hour${timeObj.hours !== 1 ? 's' : ''}`);
        }
      
        if (timeObj.minutes > 0) {
          parts.push(`${timeObj.minutes} minute${timeObj.minutes !== 1 ? 's' : ''}`);
        }
      
        if (timeObj.seconds > 0) {
          parts.push(`${timeObj.seconds} second${timeObj.seconds !== 1 ? 's' : ''}`);
        }
      
        // If all values are zero
        return parts.length > 0 ? parts.join(' ') : '0 seconds';
    }

    const canShowMobileHeader = (screenWidth, activeSection, targetedSection, minScreenWidth=577) => {
        if (screenWidth >= minScreenWidth ) return true;
        if (screenWidth <= minScreenWidth && activeSection === targetedSection) return true;
        return false;
    }
        
    return {
        ERROR_ICON,
        SUCCESS_ICON,
        INFO_ICON,
        WARNING_ICON,
        ERROR_CODE,
        SUCCESS_CODE,
        WARNING_CODE,
        INFO_CODE,
        dateFormatter,

        isEmptyObject,
        updatePageWaterMark,
        processLaravelErrorsCollections,
        uuid,
        capitalize,
        capitalizeSentence,
        displayedUserName,
        areObjectsEqual,
        slugify,
        shuffleArray,
        countOccurrences,
        nameToInitials,
        convertSecondsToHMS,
        formatTimeObjectHMS,
        canShowMobileHeader
    }
}