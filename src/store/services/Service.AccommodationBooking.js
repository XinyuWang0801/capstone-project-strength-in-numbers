import { database } from '../../firebase';

export const bookAccommodation = async (id, dates) => {
  let accommodationModel = null;

  const accommodationRef = await database.ref(`/accommodations/${id}`);
  await accommodationRef
    .once('value', (snapshot) => {
      accommodationModel = snapshot.val();
    });

  const bookedDates = accommodationModel.bookedDates ? Object.values(accommodationModel.bookedDates) : [];
  const nDates = bookedDates.concat(dates).sort();

  // firebase doesn't store arrays nicely so convert the dates into objects
  // also need to remove '/' as it does not accept this.
  const oDates = nDates.reduce((date, val) => {
    const key = val.replace(/\//g, '');
    date[key] = val; return date;
  }, {});

  database.ref().child('accommodations').child(id).child('bookedDates')
    .set(oDates);
};

export const getDatesBetweenTwoDates = (startDate, endDate) => {
  const dayUnits = 1000 * 60 * 60 * 24;
  const day1 = new Date(startDate);
  const day2 = new Date(endDate);
  const diff = (day2 - day1) / dayUnits;

  const days = [];
  for (let i = 0; i <= diff; i++) {
    days.push(new Date(day1.getTime() + dayUnits * i).toLocaleDateString());
  }

  return days;
};

// This is for the antd rangepicker to disable the already booked dates
export const getDisabledDateTime = (_, type) => {
  // Reference: https://ant.design/components/date-picker/
  if (type === 'start') {
    return {
      disabledHours: () => this.range(0, 60).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => this.range(0, 60).splice(20, 4),
    disabledMinutes: () => this.range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
