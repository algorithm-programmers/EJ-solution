/**
 * 스킬 트리
 * 스킬 트리 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다.
 * 
 * @param {string} skill 스킬 순서
 * @param {string[]} skill_trees 스킬을 배울 순서
 */
function solution(skill, skill_trees) {
    const skillOrder = skill.split("");
    console.log(skillOrder);
    
    let answer = 0;
    for (let i = 0; i < skill_trees.length; i++) {
        const skillTree = skill_trees[i];
        for (let j = 0; j < skillTree.length; j++) {
            const tree = skillTree[j].split("");
            for (let k = 0; k < skillOrder.length; k++) {
                const order = skillOrder[k];
                if(tree === order){
                    console.log(j, k, tree);
                    
                }
            }
        }
    }

    console.log(answer);
    return answer;
}

// solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]); //2 
// solution("ZCV", ["AB", "ABD", "DRT"]);   // 0
solution("BC", ["AB", "ABD", "ABC"]);   // 3