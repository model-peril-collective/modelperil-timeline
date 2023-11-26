export interface Artifact {
  type: 'paragraph' | 'image' | 'quote' | 'highlight' | 'popout';
  content: string;
}
