const localeList = ['America/New_York', 'Asia/Bangkok', 'Europe/London', 'Asia/Taipei', 'Australia/Sydney'];
const areaLocation = document.getElementsByClassName('area-location');
const areaDate = document.getElementsByClassName('area-date');
const areaTime = document.getElementsByClassName('area-time');

(function() {
  const now = new Date();
  for (let i = 0; i < localeList.length; i++) {
    const YYYY = now.toLocaleString('en-US', { year: 'numeric', timeZone: localeList[i]})
    const MM = now.toLocaleString('en-US', { month: 'short', timeZone: localeList[i]})
    const DD = now.toLocaleString('en-US', { day: '2-digit', timeZone: localeList[i]})
    const HHMM = now.toLocaleString('en-US', { timeStyle: 'short',hour12: false, timeZone: localeList[i]})

    const location = localeList[i].split('/')[1].replace('_', ' ');

    areaLocation[i].innerText = location;
    areaDate[i].innerText = `${DD} ${MM}. ${YYYY}`;
    areaTime[i].innerText = HHMM;
  }
})();
