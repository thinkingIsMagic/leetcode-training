// hashmap存储字符出现的频数
function firstUniqChar(s: string): number {
    const map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i])+1);
        }else{
            map.set(s[i], 1);
        }
    }
    for(let i=0; i<s.length; i++){
        if(map.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
};