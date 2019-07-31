import { database } from '../../firebase';

export const convertArrayOfDatesToObjects = (dates) => {
  return dates.reduce((date, val) => {
    const key = val.replace(/\//g, '');
    date[key] = val; return date;
  }, {});
};

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
  const oDates = convertArrayOfDatesToObjects(nDates);

  database.ref().child('accommodations').child(id).child('bookedDates')
    .set(oDates);
};

export const bookAccommodationForUser = async (accommodationId, userId, dates) => {
  const bookingsRef = await database.ref('/bookings');

  await bookingsRef.push({ userId, accommodationId, dates });
};

const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
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
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
