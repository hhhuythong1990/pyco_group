const ascSort = (a, b) => a - b;

const calculateDemand = (arrivals, departures, k) => {
  const arrArrival = [...arrivals].sort(ascSort);
  const arrDeparture = [...departures].sort(ascSort);

  const objReturn = {};
  let lastDate;
  objReturn.room = k - 1;
  objReturn.guest = 1;
  for (let i = 1; i < arrivals.length; i++) {
    if (arrArrival[i] > arrDeparture[i - 1]) {
      objReturn.status = true;
    } else {
      if (lastDate !== undefined && arrArrival[i] > lastDate) {
        objReturn.room += 1;
        objReturn.guest -= 1;
        lastDate = undefined;
      }
      if (objReturn.room === 0) {
        objReturn.status = false;
        objReturn.error = arrArrival[i];
        objReturn.guest += 1;
        break;
      } else {
        objReturn.guest += 1;
        objReturn.room -= 1;
        lastDate = arrDeparture[i - 1];
      }
    }
  }
  let strReturn = '';
  if (objReturn.status) {
    strReturn = 'True, there are enough room for booking';
  } else {
    strReturn = `False. At day = ${objReturn.error}, there are ${objReturn.guest} guest in hotel. But we have ${k} room`;
  }
  return strReturn;
};

module.exports = { calculateDemand };
