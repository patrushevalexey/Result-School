let userName = prompt("Как вас зовут?");

userName = userName?.toUpperCase();
userName = userName?.trim();

alert(`Вас зовут ${userName}`);