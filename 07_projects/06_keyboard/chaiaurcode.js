let keyRef = document.querySelector("#insert");
window.addEventListener("keydown", (e) => {
  keyRef.innerHTML = `
        <div class = 'color'>
            <table>
                <tr>
                    <th>KEY</th>
                    <th>KEYCODE</th>
                    <th>CODE</th>
                </tr>
                <tr>
                    <td>${e.key ===' '?"space":e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table> 
        </div>
    `
})
