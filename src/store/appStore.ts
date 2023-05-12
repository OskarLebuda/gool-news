import { defineStore } from 'pinia';
import { PostTypes } from '../types/PostType';
const baseUrl = 'https://api.fangol.pl/v3/posts';

interface IAppStoreState {
  isLoading: boolean;
  isError: boolean;
  items: PostTypes.Item[];
  currentPage: number;
  itemsPerPage: number;
}

export const useAppStore = defineStore('app', {
  state: () =>
    ({
      isLoading: false,
      isError: false,
      items: [],
      currentPage: 1,
      itemsPerPage: 8,
    } as IAppStoreState),

  actions: {
    async loadData(page: number) {
      try {
        this.currentPage = page;
        this.isLoading = true;

        const response = await fetch(
          `${baseUrl}?limit=${this.itemsPerPage}&offset=${
            (this.currentPage - 1) * this.itemsPerPage
          }`
        );
        const data = await response.json();
        this.items.push(...data.posts);
      } catch (err) {
        this.isError = true;
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
