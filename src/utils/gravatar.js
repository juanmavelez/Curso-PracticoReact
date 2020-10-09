import md5 from 'md5';

/**
 *  Creates a gravatar usign an email,this email will be hashed and this will have assigned a gravatar
 */
const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar';
  const formattedEmail = email.trim().toLowerCase();

  /*  encoding solves theproblem with the '@' character  */
  const hash = md5(formattedEmail, { ecoding: 'binary' });
  return `${base} + ${hash}`;
};

export default gravatar;
