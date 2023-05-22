export class DnDCharacter {

    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    hitpoints: number

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore()
        this.dexterity = DnDCharacter.generateAbilityScore()
        this.constitution = DnDCharacter.generateAbilityScore()
        this.intelligence = DnDCharacter.generateAbilityScore()
        this.wisdom = DnDCharacter.generateAbilityScore()
        this.charisma = DnDCharacter.generateAbilityScore()
        this.hitpoints = DnDCharacter.getModifierFor(this.constitution) + 10
    }

    public static generateAbilityScore(): number {
        return DnDCharacter.abilityScoreLoop([], 0)
    }

    private static abilityScoreLoop(acc: number[], iteration: number): number {
        if (iteration === 4) return acc.sort().slice(1, 4).reduce((l, r) => l + r)
        else {
            const random = Math.floor(Math.random() * 6) + 1
            return DnDCharacter.abilityScoreLoop(acc.concat(random), iteration + 1)
        }
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2)
    }
}
