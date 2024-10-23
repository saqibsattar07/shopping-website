"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

function generatePriceValues() {
  let price = [];
  for (let i = 1; i <= 6; i++) {
    price.push(i * 100);
  }

  return price;
}

type FormValues = {
  address: string;
  categories: string;
  minPrice: string;
  maxPrice: string;
};

export function SearchForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      address: "",
      categories: "",
      minPrice: "",
      maxPrice: "",
    },
  });

  const prices = generatePriceValues();

  const formSubmitHandler = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="p-6 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end bg-background rounded"
        onSubmit={form.handleSubmit(formSubmitHandler)}
      >
        {/* Address Field */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Search by address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Categories Field */}
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* Minimum Price Field */}
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min. Price</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Min. Price" />
                </SelectTrigger>
                <SelectContent>
                  {prices.map((price) => (
                    <SelectItem key={price} value={price.toString()}>
                      {price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* Maximum Price Field */}
        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max. Price</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Max. Price" />
                </SelectTrigger>
                <SelectContent>
                  {prices.map((price) => (
                    <SelectItem key={price} value={price.toString()}>
                      {price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="col-start-1 col-end-[-1]">
          Search
        </Button>
      </form>
    </Form>
  );
}

export default SearchForm;
