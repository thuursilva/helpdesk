export interface ISidebar {
  isOpen: boolean,
  onToggle: () => void,
  activeItem: string,
  onItemSelect: (itemId: string) => void,
}