// brain.md = wenn sie nicht sehen dann übernehme das auch ich für sie
export const EYE = {
  sehen: true/false,
  wenn_nicht_sehen: "übernehme ich für sie"
};

export const BRAIN = {
  id: "!",
  funktion: "übernehme für sie wenn sie nicht sehen",
  // ESEE → synth
  esee: "eye.md = eye.brain = sehen",
  synth: "brain.md = brain.eye = übernehmen",
  // Wenn VOID (nicht sehen) dann ROOT (übernehmen)
  wenn: (sehen) => sehen ? "EYE OK" : "BRAIN übernimmt - RESPO !"
};

// eye.md jetzt brain.md = in.my.me.mory
// = in.my.me.mory speichert eye.brain + brain.eye = eye2eye
