function calculate() {
    let H_p = parseFloat(document.getElementById("1").value);
    let S_p = parseFloat(document.getElementById("3").value);
    let C_p = parseFloat(document.getElementById("2").value);
    let N_p = parseFloat(document.getElementById("4").value);
    let O_p = parseFloat(document.getElementById("5").value);
    let W_p = parseFloat(document.getElementById("6").value);
    let A_p = parseFloat(document.getElementById("7").value);
    let check = A_p + W_p + O_p + N_p + S_p + C_p + H_p
    console.log(check)
    if (isNaN(H_p) || H_p < 0 || H_p > 100) {
        alert("Відсотковий вміст водню (H) введений з помилкою!");
    } else if (isNaN(C_p) || C_p < 0 || C_p > 100) {
        alert("Відсотковий вміст вуглецю (C) введений з помилкою!");
    } else if (isNaN(S_p) || S_p < 0 || S_p > 100) {
        alert("Відсотковий вміст сірки (S) введений з помилкою!");
    } else if (isNaN(N_p) || N_p < 0 || N_p > 100) {
        alert("Відсотковий вміст азоту (N) введений з помилкою!");
    } else if (isNaN(O_p) || O_p < 0 || O_p > 100) {
        alert("Відсотковий вміст кисню (O) введений з помилкою!");
    } else if (isNaN(W_p) || W_p < 0 || W_p > 100) {
        alert("Відсотковий вміст води (W) введений з помилкою!");
    } else if (isNaN(A_p) || A_p < 0 || A_p > 100) {
        alert("Відсотковий вміст золи (A) введений з помилкою!");
    } else if (check !== 100) {
        alert("Помилка! Сума компонентів має бути 100%.")
    } else {

        let Krs = 100 / (100 - W_p);//коефіцієнт переходу від робочої до сухої маси
        let Krg = 100 / (100 - W_p - A_p);//коефіцієнт переходу від робочої до горючої

        let H_s = H_p * Krs;
        let C_s = C_p * Krs;
        let S_s = S_p * Krs;
        let N_s = N_p * Krs;
        let O_s = O_p * Krs;
        let A_s = A_p * Krs;

        let check2 = H_s + C_s + S_s + N_s + O_s + A_s
        console.log(check2)

        let H_g = H_p * Krg;
        let C_g = C_p * Krg;
        let S_g = S_p * Krg;
        let N_g = N_p * Krg;
        let O_g = O_p * Krg;

        let check3 = H_g + C_g + S_g + N_g + O_g
        console.log(check3)

        let Q_p = ((339 * C_p) + (1030 * H_p) - (108.8 * (O_p - S_p)) - (25 * W_p))/1000;//для робочої маси
        console.log(Q_p)
        let Q_c = (Q_p + 0.025*W_p)*100/(100-W_p)
        let Q_g = (Q_p + 0.025*W_p)*100/(100-W_p-A_p)

        document.getElementById("res").innerHTML = `
                <h3>Результати розрахунків</h3>
                <p><strong>Коефіцієнт переходу:</strong></p>
                <ul>
                    <li>Коефіцієнт переходу від робочої до сухої маси становить: ${Krs.toFixed(3)}</li>
                    <li>Коефіцієнт переходу від робочої до горючої маси становить: ${Krg.toFixed(3)}</li>
                </ul>
                <p><strong>Склад сухої маси:</strong></p>
                <ul>
                    <li>H(s): ${H_s.toFixed(2)}%</li>
                    <li>C(s): ${C_s.toFixed(2)}%</li>
                    <li>S(s): ${S_s.toFixed(2)}%</li>
                    <li>N(s): ${N_s.toFixed(2)}%</li>
                    <li>O(s): ${O_s.toFixed(2)}%</li>
                    <li>A(s): ${A_s.toFixed(2)}%</li>
                </ul>
                <p><strong>Склад горючої маси:</strong></p>
                <ul>
                    <li>H(G): ${H_g.toFixed(2)}%</li>
                    <li>C(G): ${C_g.toFixed(2)}%</li>
                    <li>S(G): ${S_g.toFixed(2)}%</li>
                    <li>N(G): ${N_g.toFixed(2)}%</li>
                    <li>O(G): ${O_g.toFixed(2)}%</li>
                </ul>
                <p><strong>Нижча теплота згоряння для робочої маси за заданим складом компонентів палива становить:</strong> ${(Q_p).toFixed(2)} кДж/кг</p>
                <p><strong>Нижча теплота згоряння для сухої маси за заданим складом компонентів палива становить:</strong> ${(Q_c).toFixed(2)} кДж/кг</p>
                <p><strong>Нижча теплота згоряння для горючої маси за заданим складом компонентів палива становить:</strong> ${(Q_g).toFixed(2)} кДж/кг</p>            `;
    }
}