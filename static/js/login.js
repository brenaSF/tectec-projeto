document.querySelector("#entrar").addEventListener("click", async () => {
    const nickname = document.querySelector("#nickname").value;
    const senha = document.querySelector("#senha").value;
    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nickname, senha })
    });
    const data = await response.json();
    if (data.message === "Login efetuado com sucesso!") {
        window.location.href = "/home";
    }else{
        alert('Ops!')
    }
})