var handlers = document.querySelectorAll('.handle');
var main = document.querySelector('main');
var left = main.querySelector('.left_params');
var isDragging = false;
var activeHandler = null;

function displayTypesOfGoods(checkbox) {
  var iframe = document.getElementById("depot-plan");
  var content = iframe.contentDocument || iframe.contentWindow.document;
  var area;
  var fill;
  console.log(content)
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


document.addEventListener('mousedown', function (e) {
  handlers.forEach(handler => {
    if (e.target === handler) {
      isDragging = true;
      activeHandler = handler;
    }
  });
});

document.addEventListener('mousemove', function (e) {
  if (!isDragging) {
    return false;
  }

  var containerOffsetLeft = main.offsetLeft;
  var containerOffsetRight = main.offsetLeft + main.offsetWidth;

  if (activeHandler.classList.contains('left-handle')) {
    var pointerRelativeXpos = e.clientX - containerOffsetLeft;
    var boxMinWidth = 100;
    left.style.width = (Math.max(boxMinWidth, pointerRelativeXpos - 5)) + 'px';
    left.style.flexGrow = 0;
  }
});

document.addEventListener('mouseup', function (e) {
  isDragging = false;
  activeHandler = null;
});
