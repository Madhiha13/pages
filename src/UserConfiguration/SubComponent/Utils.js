// utils.js

export const getInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
    return initials;
  };
  