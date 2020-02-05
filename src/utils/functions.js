export const formatDate = date => {
  const dateToFormat = new Date(date);
  const day = dateToFormat.getDate();
  const year = dateToFormat.getFullYear();
  const month = dateToFormat.toLocaleString("de-de", { month: "2-digit" });

  return `${day}/${month}/${year}`;
};

export const formatTime = date => {
  const dateToFormat = new Date(date);
  let hour = dateToFormat.getHours();
  hour = ("0" + hour).slice(-2);
  let minutes = dateToFormat.getMinutes();
  minutes = ("0" + minutes).slice(-2);

  return `${hour}:${minutes}`;
};

export const getDurationFlight = (time1, time2) => {
  let diff = new Date(time2).getTime() - new Date(time1).getTime();
  let minutes = parseInt((diff / (1000 * 60)) % 60);
  let hours = parseInt((diff / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}h ${minutes}`;
};

export const getDelayTime = (time1, time2) => {
  const diff = new Date(time2).getTime() - new Date(time1).getTime();
  let minutes = parseInt((diff / (1000 * 60)) % 60);
  let hours = parseInt((diff / (1000 * 60 * 60)) % 24);

  const checkHours = h => {
    let hour;
    if (h === 0) {
      hour = "";
    } else if (h < 10) {
      hour = "0" + h + "h ";
    } else {
      hour = h;
    }
    return hour;
  };

  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diff > 0) {
    return `${checkHours(hours)}${minutes}min`;
  }
};

export const checkStatus = status => status === "cancelled" || status === "delayed" ? true : false;