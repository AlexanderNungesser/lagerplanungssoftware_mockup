function displayTypesOfGoods(checkbox) {
  var iframe = document.getElementById("depot-plan");
  var content = iframe.contentDocument || iframe.contentWindow.document;
  var area;
  var fill;
  switch (checkbox.id.split(' ')[1]) {
    case 'kalt':
      area = content.getElementById("kalt");
      fill = "#ADD8E6";
      break;
    case 'gift':
      area = content.getElementById("gift");
      fill = "#FF6347";
      break;
    case 'explosiv':
      area = content.getElementById("explosiv");
      fill = "#FFD700";
      break;
    case 'btm':
      area = content.getElementById("btm");
      fill = "#98FB98";
      break;
    default:
      break;
  }

  if (checkbox.checked == true) {
    area.setAttribute("fill", fill);
  } else {
    area.setAttribute("fill", "white");
  }
}

function changeDropdownWerk(element) {
  var dropdownButton = document.getElementById('dropdown-werk');
  dropdownButton.textContent = element.textContent;
}

function changeDropdownLager(element) {
  var dropdownButton = document.getElementById('dropdown-lager');
  dropdownButton.textContent = element.textContent;
}

function changeDepotPlanLevel(element) {
  var depotPlanImage = document.getElementById('depot-plan');
  var baseUrl = depotPlanImage.getAttribute('data-base-url');
  var filename = '';
  switch (element.id) {
    case 'level-1':
      filename = 'depot_plan_1.svg';
      break;
    case 'level-2':
      filename = 'depot_plan_2.svg';
      break;
    case 'level-3':
      filename = 'depot_plan_3.svg';
      break;
  }
  depotPlanImage.setAttribute('src', `${baseUrl}${filename}`);
}

function changeAccountMode() {
  var accountIcon = document.getElementById('account-icon');
  if (accountIcon.getAttribute('src').includes('logout_bold.svg')) {
    var baseUrl = accountIcon.getAttribute('data-base-url');
    accountIcon.setAttribute('src', `${baseUrl}account_bold.svg`);
    accountIcon.setAttribute('alt', 'Login');
  } else {
    var login = document.querySelector('.login');
    login.style.display = (login.style.display === 'none' || login.style.display === '') ? 'flex' : 'none';
  }
}

function login() {
  var email = document.getElementById('floatingEmail');
  var password = document.getElementById('floatingPassword');
  if (email.value == 'admin@smartdepot.com' && password.value == 'admin') {
    var accountIcon = document.getElementById('account-icon');
    var baseUrl = accountIcon.getAttribute('data-base-url');
    accountIcon.setAttribute('src', `${baseUrl}logout_bold.svg`);
    accountIcon.setAttribute('alt', 'Logout');
    var login = document.querySelector('.login');
    login.style.display = 'none';
  }
  email.value = '';
  password.value = '';
}

document.getElementById('floatingPassword').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    login();
  }
});

function closeLogin() {
  document.querySelector('.login').style.display = 'none';
}

function displayDeliveryForm(type) {
  var delivery_form = document.querySelector('.add-delivery');
  delivery_form.id = type;
  delivery_form.style.display = (delivery_form.style.display === 'none' || delivery_form.style.display === '') ? 'flex' : 'none';
}

function closeDeliveryForm() {
  document.querySelector('.add-delivery').style.display = 'none';
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

document.getElementById('floatingDatum').min = getTodayDate();

function createDelivery(button) {
  var title = document.getElementById('floatingTitle');
  var charge = document.getElementById('floatingCharge');
  var paletes = document.getElementById('floatingPaletten');
  var date = document.getElementById('floatingDatum');
  var temp = document.getElementById('floatingTemp');

  var content = (button.parentElement.id == "receipt") ? document.getElementById('collapseReceiptContent') : document.getElementById('collapseSendContent');
  content.innerHTML += `<div class="card card-body">
                          <div class="header">
                              <h6 class="card-title">${title.value}</h6>
                              <h6 class="card-title">Charge-Nr.: ${charge.value}</h6>
                          </div>
                          <div class="content">
                              <p>Paletten: ${paletes.value}</p>
                              <p>Datum: ${date.value}</p>
                              <p>Temp.: ${temp.value} °C</p>
                          </div>
                          <button class="btn btn-primary" type="button" onclick="">Lieferschein</button>
                        </div>`;
  closeDeliveryForm();
}


const leftParams = document.querySelector('.left_params');
const handle = document.querySelector('.handle');

let isResizing = false;

handle.addEventListener('mousedown', function (e) {
  isResizing = true;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
  if (!isResizing) return;

  const newWidth = e.clientX;
  if (newWidth < 100 || newWidth > window.innerWidth * 0.5) return;

  leftParams.style.width = `${newWidth}px`;
  handle.style.left = `${newWidth}px`;
}

function onMouseUp() {
  isResizing = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}
