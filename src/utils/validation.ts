export const isMainPasswordValid = (mainPassword: string): boolean => {
  return mainPassword === 'abc';
};

export const serviceExists = (service: string) : boolean => {
  return service === "Leon" || service === "Christopher" ||  service === "Philipp"
}
