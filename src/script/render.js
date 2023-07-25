import createElements from './createElements';

const {
  createImageLogo,
  createHeader,
  createLogo,
  createMain,
  createRow,
  createButtonsGroup,
  createFooter,
  createFooterContent,
  createTable,
  createForm,
} = createElements;

export const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const imageLogo = createImageLogo();
  const logo = createLogo(title);
  const main = createMain();
  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'добавить',
    },
    {
      className: 'btn btn-danger mr-3',
      type: 'button',
      text: 'Удалить',
    },
    {
      className: 'btn btn-danger btnVar',
      type: 'button',
      text: 'Удалить по номеру телeфона',
    },
  ]);
  const table = createTable();
  const {form, overlay} = createForm();
  const footer = createFooter();
  const footerContent = createFooterContent(title);

  header.headerContainer.append(imageLogo, logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  footer.footerContainer.append(footerContent);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContacts = (elem, newData) => {
  const allRow = newData.map(createRow);
  elem.append(...allRow);
  return allRow;
};

