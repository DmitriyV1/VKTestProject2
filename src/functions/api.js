export const getFact = async function () {
  let data;

  await fetch("https://catfact.ninja/fact")
    .then((resp) => resp.json())
    .then((fact) => (data = fact.fact));

  return data;
};

export const getAge = async function (name) {
  let data;

  await fetch(`https://api.agify.io?name=${name}`)
    .then((resp) => resp.json())
    .then((age) => (data = age.age));

  return data;
};
