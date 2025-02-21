function calculete() {
    let Carbon = parseFloat(document.getElementById("1").value);
    let Hydrogen = parseFloat(document.getElementById("2").value);
    let Oxygen = parseFloat(document.getElementById("3").value);
    let Sulfur = parseFloat(document.getElementById("4").value);
    let Q_daf = parseFloat(document.getElementById("5").value);
    let Wet = parseFloat(document.getElementById("6").value);
    let Ashness = parseFloat(document.getElementById("7").value);
    let Vanadium = parseFloat(document.getElementById("8").value);
    if (isNaN(Carbon) || Carbon < 0 || Carbon > 100) {
        alert("Відсотковий вміст вуглицю введений з помилкою!");
    } else if (isNaN(Hydrogen) || Hydrogen < 0 || Hydrogen > 100) {
        alert("Відсотковий вміст водню введений з помилкою!");
    } else if (isNaN(Oxygen) || Oxygen < 0 || Oxygen > 100) {
        alert("Відсотковий вміст кисню введений з помилкою!");
    } else if (isNaN(Sulfur) || Sulfur < 0 || Sulfur > 100) {
        alert("Відсотковий вміст cірки введений з помилкою!");
    } else if (isNaN(Q_daf) || Q_daf < 0 ) {
        alert("Значення НТЗ введена з помилкою!");
    } else if (isNaN(Wet) || Wet < 0 || Wet > 100 ) {
        alert("Відсотковий вміст вологості введений з помилкою!");
    } else if (isNaN(Ashness) || Ashness < 0 || Ashness > 100) {
        alert("Значення зольності введене з помилкою!");
    } else if (isNaN(Vanadium) || Vanadium < 0 ) {
        alert("Вміст ванадію введений з помилкою!");
    } else {
        let C_p = Carbon * (100 - Wet - Ashness) / 100;
        let H_p = Hydrogen * (100 - Wet - Ashness) / 100;
        let O_p = Oxygen * (100 - Wet - Ashness) / 100;
        let S_p = Sulfur * (100 - Wet - Ashness) / 100;
        let A_p = Ashness * (100 - Wet) / 100;
        let V_p = Vanadium * (100 - Wet) / 100;

        let Q_r_i = Q_daf * ((100 - Wet - Ashness) / 100) - 0.025 * Wet;

        document.getElementById("output").innerHTML = `
                <h3>Результати розрахунків</h3>
                <p><strong>Склад мазуту на робочу масу:</strong></p>
                <ul>
                    <li>Вуглець: ${C_p.toFixed(2)}%</li>
                    <li>Водень: ${H_p.toFixed(2)}%</li>
                    <li>Кисень: ${O_p.toFixed(2)}%</li>
                    <li>Сірка: ${S_p.toFixed(2)}%</li>
                    <li>Зола: ${A_p.toFixed(2)}%</li>
                    <li>Ванадій: ${V_p.toFixed(2)} мг/кг</li>
                </ul>
                <p><strong>Нижча теплота згоряння:</strong> ${Q_r_i.toFixed(2)} МДж/кг</p>
            `;
    }
}