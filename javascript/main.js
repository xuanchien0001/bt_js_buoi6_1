/* Bài 1: tìm số nguyên dương nhỏ nhất sao cho: 1+2+3+...+n > 10000 */
let arr_bai1 = [];
const ketqua_bai1 = document.querySelector(".bai1 .btn");
ketqua_bai1.onclick = () => {
  const inputX = document.querySelector(".bai1 .form-control").value * 1;
  bai1(inputX);
};

function bai1(x) {
  let tong = 0;
  let n = 0;
  for (i = 0; i < x; i++) {
    tong += i;
    if (tong > x) {
      n = i;
      break;
    }
  }
  const render_ouput_bai1 = document.querySelector(".bai1 .ketqua");
  render_ouput_bai1.innerHTML = `n = ${n}`;
}

/*Bài 2: tính tổng S(n) = x + x^2 + x^3 + ... + x^n (n và x là do user nhập vào) */
const ketqua_bai2 = document.querySelector(".bai2 .btn");
ketqua_bai2.onclick = () => {
  const x = document.querySelector(".bai2 .x").value * 1;
  const n = document.querySelector(".bai2 .n").value * 1;
  const render_ouput_bai2 = document.querySelector(".bai2 .ketqua");
  let S = bai2(x, n);
  render_ouput_bai2.innerHTML = `S(${n}) = ${S}`;
};
function bai2(x, n) {
  let tongS = 0;
  for (let i = 1; i <= n; i++) {
    tongS += Math.pow(x, i);
  }
  return tongS;
}
/* Bài 3: viết chương trình tính giai thừa*/
const ketqua_bai3 = document.querySelector(".bai3 .btn");
ketqua_bai3.onclick = () => {
  const input_bai3 = document.querySelector(".bai3 input").value * 1;
  let giaithua = 1;
  for (let i = 1; i <= input_bai3; i++) {
    giaithua *= i;
  }
  const render_ouput_bai3 = document.querySelector(".bai3 .ketqua");
  render_ouput_bai3.innerHTML = `${input_bai3}! = ${giaithua}`;
};

/* Bài 4: in số thẻ div mà user nhập vào */
document.querySelector(".bai4 .btn").onclick = () => {
  const input_bai4 = document.querySelector(".bai4 input");
  const output_bai4 = document.querySelector(".bai4 .output_bai4");
  let html = "";
  for (let i = 1; i <= input_bai4.value * 1; i++) {
    if (i % 2 === 1) {
      console.log("day la so le thu ", i);
      output_bai4.innerHTML +=
        html + `<div class="output_le">Div lẻ ${i}</div>`;
    } else {
      console.log("day la so chan thu ", i);
      output_bai4.innerHTML +=
        html + `<div class="output_chan">Div chẵn ${i}</div>`;
    }
  }
  input_bai4.value = "";
  input_bai4.onfocus = () => {
    output_bai4.innerHTML = "";
  };
};
