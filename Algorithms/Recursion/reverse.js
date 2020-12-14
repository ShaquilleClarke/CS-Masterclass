const log = console.log;

const reverse = (string) => {
    if(string.length <= 1) return string;
    return reverse(string.slice(1)) + string[0];
}
log(reverse('cap'))
log(reverse('awesome'))