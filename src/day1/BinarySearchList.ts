export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    while(lo < hi){
        const m = Math.floor(lo + (hi - lo)/2);
        const val = haystack[m];
        if (val === needle){
            return true;
        } else if (val > needle){
            hi = m; //look at the lower half
        } else if (val < needle){
            lo = m + 1; //look at the higher half
        }
    }
    return false;
}