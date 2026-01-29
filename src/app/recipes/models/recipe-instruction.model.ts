export interface RecipeInstruction {
  name: string;
  steps: {
    number: number;
    text: string;
  }[];
}
