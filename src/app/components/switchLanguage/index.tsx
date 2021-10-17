import i18next from 'i18next';
export const SwitchLanguage = () => {
  const handleOnChange = e => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <select
      name="language"
      value={localStorage.getItem('i18nextLng') || 'en'}
      onChange={handleOnChange}
    >
      <option value="en">EN</option>
      <option value="vn">VN</option>
    </select>
  );
};
