const m = [`السلام عليكم،

أحاول استخدام رقمي الشخصي لكن تظهر رسالة "Login not available".

بيانات الاتصال: {nomor}

يرجى حل المشكلة.

[Candra]`,`Hola,

Estoy intentando usar mi número personal, pero aparece el mensaje "Login not available".

Dato de contacto: {nomor}

Por favor, solucionen este problema.

[Candra]`,`Bonjour,

J’essaie d’utiliser mon numéro personnel, mais le message "Login not available" s’affiche.

Coordonnées : {nomor}

Merci de résoudre ce problème.

[Candra]`,`Hallo,

Ich versuche meine eigene Nummer zu verwenden, aber es erscheint die Meldung "Login not available".

Kontakt: {nomor}

Bitte beheben Sie das Problem.

[Candra]`,`こんにちは、

自分の番号を使おうとすると「Login not available」と表示されます。

連絡先: {nomor}

対応をお願いします。

[Candra]`,`안녕하세요,

제 번호를 사용하려고 하면 "Login not available" 메시지가 나타납니다.

연락처: {nomor}

문제를 해결해 주세요.

[Candra]`,`नमस्ते,

मैं अपना नंबर इस्तेमाल करने की कोशिश कर रहा हूँ, लेकिन "Login not available" दिख रहा है।

संपर्क: {nomor}

कृपया इसे ठीक करें।

[Candra]`,`Здравствуйте,

Я пытаюсь использовать свой номер, но появляется сообщение "Login not available".

Контакт: {nomor}

Пожалуйста, решите эту проблему.

[Candra]`]

function pr(nomor) {
  if (!nomor) throw new Error("Nomor wajib diisi");
  const r = m[Math.floor(Math.random() * m.length)]
  // replace semua {nomor} kalau ada lebih dari satu
  return r.replace(/{nomor}/g, nomor);
}

module.exports = { pr }