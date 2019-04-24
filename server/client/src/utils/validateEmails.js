const emailrex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmailsArr = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => emailrex.test(email) === false);

  if (invalidEmailsArr.length) {
    return `These emails are invalid ${invalidEmailsArr}`;
  }
  return;
};
